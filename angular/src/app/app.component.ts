import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  private userData;

  ngOnInit() {
    this.userData = this.dataService.getUserData().subscribe(
      res => {
        this.userData = res;
      }
    );
  }




}
