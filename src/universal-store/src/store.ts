import {Injectable} from 'angular2/core';

export abstract class StoreBackend {
  abstract getValue(key: string): any {}
  abstract setValue(key: string, value: any): any {}
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
