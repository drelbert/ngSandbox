import { Injectable } from '@angular/core';

import { BARDATA } from './bar-data';

@Injectable()
export class BarService {
  getIds() {
    return Promise.resolve(BARDATA);
  }
}
