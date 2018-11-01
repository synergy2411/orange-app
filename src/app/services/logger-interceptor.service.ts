import { Injectable } from '@angular/core';
import { HttpInterceptor, 
  HttpEvent, 
  HttpRequest, 
  HttpHandler, 
  HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';


@Injectable()
export class LoggerInterceptorService implements HttpInterceptor {

  intercept(req : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>>{
    console.log("Logger Interceptor Worked!",req);
    
    return next.handle(req)
      .do((response)=>{
        console.log(response);
        return response;
      });
  }
 

}
