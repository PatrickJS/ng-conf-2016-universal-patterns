export var inMemoryStore = {};

// TODO(gdi2290): redis

export class NodeBackend {
  getValue(prop) {
    return inMemoryStore[prop] || null;
  }
  setValue(prop, value) {
    return inMemoryStore[prop] = value;
  }
}
