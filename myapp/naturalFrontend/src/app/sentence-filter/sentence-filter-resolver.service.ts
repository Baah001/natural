import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import { HttpService } from '../services/http.service';

@Injectable()
export class SentenceFilterResolverService implements Resolve<any>{

  constructor(private httpService: HttpService) { }

  resolve(route: ActivatedRouteSnapshot) {

    return this.httpService.getNatural('/natural/static/article');

  }
}
