export var inMemoryStore = {};



export class NodeBackend {
  getValue(prop) {
    return inMemoryStore[prop];
  }
  setValue(prop, value) {
    return inMemoryStore[prop] = value;
  }
}
