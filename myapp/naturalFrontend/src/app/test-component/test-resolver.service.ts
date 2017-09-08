import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { HttpService } from '../services/http.service';

@Injectable()
export class TestResolverService implements Resolve<any>{


  constructor(private httpService: HttpService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.httpService.getNatural('/natural/soundalike/grap/gap/true');

  }
}
