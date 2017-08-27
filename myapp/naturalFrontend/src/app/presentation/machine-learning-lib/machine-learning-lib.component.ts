import {Component, OnInit} from '@angular/core';
import {NavigationService} from "../navigation.service";
import {MythsComponent} from '../myths/myths.component';
import {content} from './machine-learning-content';

@Component({
  selector: 'app-machine-learning-lib',
  templateUrl: './machine-learning-lib.component.html',
  styleUrls: ['./machine-learning-lib.component.css']
})
export class MachineLearningLibComponent extends MythsComponent implements OnInit {

  super(navigationService: NavigationService) {}

  ngOnInit() {
    this.importedContent = content;
    this.mythsContent = [this.importedContent[0]];
  }
}
