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

    (this.selectedContact["messages"].length == 0 ? this.messagesEmpty = true : this.messagesEmpty = false);


  }

  onSubmit(value: any) {
    let message = {
      "id": 0,
      "text": value,
      "created": Date(),
      "createdBy": 0
    };
    (value == "" ? alert("Please send a") : this.selectedContact.messages.push(message));
  }

}
