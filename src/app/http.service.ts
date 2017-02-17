import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('https://angular2-course-1621f.firebaseio.com/title.json')
      .map((response: Response) => response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://angular2-course-1621f.firebaseio.com/data.json', body,
      { headers: headers } )
      .map((data: Response) => data.json());
  }

}
