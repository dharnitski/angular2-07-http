import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
      (data: any) => console.log(data)
      );
  }

}
