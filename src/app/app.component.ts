import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  items: any[] = [];
  asyncString = this.httpService.getData();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
      (data: any) => console.log(data)
      );
  }

  onSubmit(username: string, email: string) {
    this.httpService.sendData({ username: username, email: email })
      .subscribe(data => console.log(data));
  }

  onGetData() {
    this.httpService.getOwnData()
      .subscribe(data => {
        const myArray = [];
        for (const key in data) {
          myArray.push(data[key]);
        }
        this.items = myArray;
      });
  }

}
