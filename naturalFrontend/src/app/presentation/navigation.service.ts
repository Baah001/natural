import {Injectable, HostListener} from '@angular/core';

@Injectable()
export class NavigationService {
  nexPagestr: string = 'machine-learning-lib';
  previousPageStr: string = 'myths';

  constructor() {

  }


  getNextPage(): string {
    return this.nexPagestr;
  }

  setNextPage(path: string) {
    this.nexPagestr = path;
  }

  getPreviousPage(): string {
    return this.previousPageStr;
  }

  setPreviousPage(path: string) {
    this.previousPageStr = path;
  }


}
