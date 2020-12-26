import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private cookieService: CookieService) {}

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = this.cookieService.get("CSRFID");
        console.log("idtoken", idToken);


        if (idToken) {
            const cloned = req.clone({
                body: {...req.body, csrf: idToken}
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}
