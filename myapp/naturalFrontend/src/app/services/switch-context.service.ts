import { Injectable } from '@angular/core';

@Injectable()
export class SwitchContextService {
  switchFunctionalityCommand;
  eventCount;
  similarity;

  constructor() { }

  onSwitchContext(event) {
    const eventValue = event.key;
    this.eventCount++;

    if (eventValue === 'c' || eventValue === 'l' || eventValue === 'e' || eventValue === 'a'
      || eventValue === 'r' || eventValue === '1' || eventValue === '2') {
      this.switchFunctionalityCommand.push(eventValue);

      if (this.eventCount > 7 && this.switchFunctionalityCommand.join('') !== 'clear12') {
        this.switchFunctionalityCommand = [];
        this.eventCount = 0;
        console.log('try again');

        console.log(this.switchFunctionalityCommand);
      } else if (this.switchFunctionalityCommand.join('') === 'clear12') {
        this.similarity = false;
        alert('clearing');
      }
    }
  }
}
