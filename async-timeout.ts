

var count = 0;
var nativeSetTimeout = setTimeout;

function wrapSetTimeout(fn, delay) {
  count++;
  setTimeout(() => {
    count--;
    fn();
  }, delay);
}

global.setTimeout = wrapSetTimeout;


function checkCount() {
  return count <= 0;
}



function waitForAsync(value) {

  var awaitForMe = new Promise(resolve => {

    function checkStable() {
      nativeSetTimeout(() => {
        var isStable = checkCount();

        if (isStable) {
          return resolve(value);
        } else {
          checkStable();
        }

      });
    }
    checkStable();

  });

  return awaitForMe;
}



.platform()
.application()
.then(() => waitForAsync)
.bootstrap()
.then();





    // nope
// [checkStable, task, task, task, task, task, checkStable]
