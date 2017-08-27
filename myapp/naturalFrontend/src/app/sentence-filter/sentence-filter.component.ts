import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-sentence-filter',
  templateUrl: './sentence-filter.component.html',
  styleUrls: ['./sentence-filter.component.css']
})
export class SentenceFilterComponent implements OnInit {
  article: string[];
  searchResults = [];

  constructor(private route: ActivatedRoute, private httpService: HttpService) {}

  ngOnInit() {
    this.route.data
      .subscribe(
        (response) => {
          this.article = response['staticArticle']['article'];
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onFilter(userInput: HTMLInputElement) {
    this.httpService.getNaturalDynamic('/natural/statictext/', userInput.value)
      .subscribe(
        (response) => {
          this.searchResults = [];
          for (let item in response) {
            if (response.hasOwnProperty(item)) {
              this.searchResults.push(response[item]);
            }
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}


