import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class WhitepaperGuardService implements CanActivate {
  alwaysFalse = false;

  constructor() { }

    canActivate(route: ActivatedRouteSnapshot) {
      if (this.alwaysFalse) {

      } else {
        window.location.href="https://s3-us-west-2.amazonaws.com/beenest-public/whitepaper/bee_whitepaper_v2.pdf"
      }

      return false;
    }
}
