import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public userData;
  public selectedContact;
  public messagesEmpty = false;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getUserData().subscribe(
      res => {
        this.userData = res;
        this.selectedContact = res[0];
      }
    );
  }

  selectedUser(i) {
    this.selectedContact = this.userData[i];
    console.log(this.selectedContact);

    if (this.selectedContact["messages"].length == 0)
      this.messagesEmpty = true;
    else this.messagesEmpty = false;

  }

}
