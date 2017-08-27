import {Injectable} from '@angular/core';

@Injectable()
export class WordSimilarityService {
  baseword;
  myPoem;
  word;
  wordSimilarityForm;
  httpService;
  soundAlikeResult;

  constructor() {}

  onSubmit(event) {
    const lastSentence = event.target.value;

    if (event.keyCode === 13) {
      const wordsArray = lastSentence.split(' ');
      const toSendWord = wordsArray[wordsArray.length - 1];
      type soundAlikeRes = {result: boolean, baseWordResult: string, wordResult};

      if (this.baseword === undefined) {
        this.baseword = toSendWord;
        this.myPoem.push(lastSentence);
      } else {
        this.word = toSendWord;

        if (this.wordSimilarityForm.get('setBaseWord').value) {
          this.baseword = toSendWord;
          this.wordSimilarityForm.get('setBaseWord').setValue(false);
          this.myPoem.push(lastSentence);
        } else {
          const searchSoundex = this.wordSimilarityForm.get('jaroWinkler').value;

          this.httpService.getSoundAlike('/natural/soundalike/', this.baseword, this.word, searchSoundex)
            .subscribe(
              (response: soundAlikeRes) => {

                this.soundAlikeResult = response;

                /** check to see if input `word` and `base word` sound alike **/
                if (this.soundAlikeResult.result) {
                  this.myPoem.push(lastSentence);
                }
              },
              (error) => console.log(error)
            );
        }
      }
      event.target.value = '';
    }
  }
}
