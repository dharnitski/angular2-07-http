import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('https://angular2-course-1621f.firebaseio.com/title.json')
      .map((response: Response) => response.json());
  }

}
