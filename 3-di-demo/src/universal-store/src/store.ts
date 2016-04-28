import {Injectable} from 'angular2/core';

export class StoreBackend {
  getValue(key: string): any {
    throw new Error('Error Backend');
  }
  setValue(key: string, value: any): any {
    throw new Error('Error Backend');
  }
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
