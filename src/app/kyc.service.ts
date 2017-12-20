import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class KycService implements CanActivate {
  constructor() { }
    canActivate(route: ActivatedRouteSnapshot) {
        window.location.href="https://www.facebook.com/";
        return false;
    }

}
