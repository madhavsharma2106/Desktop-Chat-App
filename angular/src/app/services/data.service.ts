import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(
    private http: Http
  ) { }

  public userData;

  getUserData(): Observable<any> {

    const url = 'http://demo4842709.mockable.io/users';
   
    return this.http.get(url).map(
      res => {
        // Removing empty spaces by regex
        this.userData =  JSON.parse(res["_body"].replace(/\s+/g,' '));
        return this.userData;
      }
    );
  }


}
