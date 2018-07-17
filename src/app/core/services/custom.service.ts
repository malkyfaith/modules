import { Injectable } from '@angular/core';

@Injectable()
export class CustomService {

  str = 'Custom Service';

  constructor() { }

  public getData() {
    return this.str;
  }

  public setData(str) {
    this.str = str;
  }

}
