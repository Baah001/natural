import {Component, OnInit, AfterContentChecked, HostListener, OnDestroy} from '@angular/core';
import {NavigationService} from '../navigation.service';
import {content} from './myths-content';

@Component({
  selector: 'app-myths',
  templateUrl: './myths.component.html',
  styleUrls: ['./myths.component.css']
})
export class MythsComponent implements OnInit {
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.onNavigateItem(event.keyCode);
  }

  mythsContent: string[];
  pushCount = 1;
  importedContent: string[] | any = content;

  constructor(protected navigationService: NavigationService) {}

  ngOnInit() {
    this.mythsContent = [this.importedContent[0]];
  }

  onNavigateItem(keyCode) {

    // left arrow
    if (keyCode === 37) {
      this.removeItem();

      // right arrow
    } else if (keyCode === 39) {
      this.addItem();
    }

  }

  private addItem() {
    if (this.pushCount < this.importedContent.length) {
      this.mythsContent.push(this.importedContent[this.pushCount]);
      this.pushCount++;
    }
  }

  private removeItem() {
    if (this.pushCount > 1) {
      this.pushCount--;
      this.mythsContent.pop();
    }
  }
}
