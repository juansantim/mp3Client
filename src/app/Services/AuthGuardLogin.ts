import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthGuardLogin implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let currentUser = JSON.parse(localStorage.getItem(environment.credentials));

        if (!currentUser) {
            return true;
        }

        this.router.navigate(['/consulta'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}