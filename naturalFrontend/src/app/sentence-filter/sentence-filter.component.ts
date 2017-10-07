import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../services/http.service';
import {Observable, BehaviorSubject, Subscription} from "rxjs";
import * as _ from 'lodash';

@Component({
  selector: 'app-sentence-filter',
  templateUrl: './sentence-filter.component.html',
  styleUrls: ['./sentence-filter.component.css']
})
export class SentenceFilterComponent implements OnInit {
  article$: Observable<string[]>;
  searchResults: string[] = [];
  resultSubscription: Subscription;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
  }

  ngOnInit() {
    this.getRouteData();

  }

  onFilter(userInput: HTMLInputElement) {
    this.resultSubscription = this.httpService.getNaturalDynamic('/natural/statictext/', userInput.value)
      .subscribe(
        (result: string[]) => {
          for (let item in result) {
            if (result.hasOwnProperty(item)) {
              this.searchResults.push(result[item]);
            }
          }
          console.log(this.searchResults);
        },
        console.error
      )

  }

  private getRouteData() {
    this.article$ = this.route.data
      .first()
      .map(data => data['staticArticle']['article'])
      .publishLast().refCount();


  }
}
