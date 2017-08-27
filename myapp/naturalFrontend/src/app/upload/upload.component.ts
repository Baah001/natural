import {Component, OnInit} from '@angular/core';

import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  userText = [];
  searchResults = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {}

  fileChange(event) {
    let input = event.target;
    for (let index = 0; index < input.files.length; index++) {
      const reader = new FileReader();
      reader.onload = () => {
        let text = reader.result;
        this.userText.push(...text.split('.\n'));
      };
      reader.readAsText(input.files[index]);
    }
  }

  onFilter(userInput) {
    this.httpService.postNaturalDynamic('/natural/dynamictext/', this.userText + ' ', userInput.value)
      .subscribe(
        (response) => {
          const responseObj = JSON.parse(response);

          this.searchResults = [];
          for (let item in responseObj) {
            if (responseObj.hasOwnProperty(item)) {
              this.searchResults.push(responseObj[item]);
            }
          }
        },
        (error) => {
          console.log(error);
        }
      )
  }
}



