



export class BrowserBackend {
  getValue(prop) {
    return window.localStorage.getItem(prop);
  }
  setValue(prop, value) {
    return window.localStorage.setItem(prop, value);
  }
}
