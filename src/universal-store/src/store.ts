import {Injectable} from 'angular2/core';

export abstract class StoreBackend {
  getValue(key: string): any {}
  setValue(key: string, value: any): any {}
}

@Injectable()
export class Store {
  constructor(public backend: StoreBackend) {}

  get(key) {
    return this.backend.getValue(key);
  }
  set(key, value) {
    return this.backend.setValue(key, value);
  }
}
