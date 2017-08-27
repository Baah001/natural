import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// services
import {HttpService} from '../services/http.service';
import { SwitchContextService } from '../services/switch-context.service';
import { WordSimilarityService } from '../services/word-similarity.service';

@Component({
  selector: 'app-word-similarity',
  templateUrl: './word-similarity.component.html',
  styleUrls: ['./word-similarity.component.css']
})
export class WordSimilarityComponent implements OnInit {
  myPoem = [];
  baseword: string;
  word: string;
  wordSimilarityForm: FormGroup;
  soundAlikeResult: {result: boolean, baseWordResult: string, wordResult: string};
  switchFunctionalityCommand = [];
  eventCount: number = 0;
  similarity = true;

  constructor(private httpService: HttpService,
              private fb: FormBuilder,
              private switchContextService: SwitchContextService,
              private wordSimilarityService: WordSimilarityService
  ) {
  }

  ngOnInit() {
    this.wordSimilarityForm = this.fb.group({
      setBaseWord: [null],
      jaroWinkler: [false]
    });
  }

  onSubmit(event) {
    this.wordSimilarityService.onSubmit.call(this, event);
  }

  onClearScreen(event) {
    this.switchContextService.onSwitchContext.call(this, event);
  }

}
