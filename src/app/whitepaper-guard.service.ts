import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class WhitepaperGuardService implements CanActivate {
  alwaysFalse = false;

  constructor() { }

    canActivate(route: ActivatedRouteSnapshot) {
      if (this.alwaysFalse) {

      } else {
        window.location.href="https://drive.google.com/file/d/0B9xUBfSaEkksbmZCNmFsb3l5ZE0/view"
      }

      return false;
    }
}
