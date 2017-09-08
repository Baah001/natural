import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
myResponseMessage: string;
actualResponse;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe((response) => {
      this.labelGuess(response['testData']);
      this.actualResponse = response['testData'];
      console.log(response);
    });

  }

  labelGuess(response) {

    if (response.result) {
      this.myResponseMessage = 'Well done, the words do sound alike!'
    } else {
      this.myResponseMessage = 'No, these words do not sound alike at all! angry face!'
    }

    console.log(this.myResponseMessage);
  }

}
