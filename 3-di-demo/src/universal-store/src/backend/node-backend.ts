// or redis
export var inMemoryStore = {
  data: 'ng-conf 2016'
};


export class NodeBackend {
  getValue(prop) {
    return inMemoryStore[prop] || null;
  }
  setValue(prop, value) {
    return inMemoryStore[prop] = value;
  }
}


// App,
