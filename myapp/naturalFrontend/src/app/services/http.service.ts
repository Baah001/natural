import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getNatural(url: string) {

    return this.http.get(url)
      .map((naturalSentecesResponse) => {
        return naturalSentecesResponse.json();
      })
  }

  getSoundAlike(url: string, baseword: string, word: string, Soundex: boolean) {

    return this.http.get(`${url}${baseword}/${word}/${Soundex}`)
      .map((soundAlikeResponse) => {
        return soundAlikeResponse.json();
      })
  }

  getNaturalDynamic(url: string, userInput?: any) {

    return this.http.get(`${url}${userInput}`)
      .map((naturalSentecesResponse) => {
        return naturalSentecesResponse.json();
      })
  }

  postNaturalDynamic(url: string, userInput?: any, searchQuery?: string) {
    const headers = new Headers();
    headers.append('uploadedText', userInput);

    return this.http.post(`${url}${searchQuery}`, headers)
      .map((naturalSentecesResponse) => {
        return naturalSentecesResponse.json();
      })
      .catch(
        (error) => {
          return Observable.throw(error);
        }
      )
  }
}
