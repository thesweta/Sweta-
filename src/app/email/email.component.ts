import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
     emailAddress;
  constructor( private email:EmailService) {
    this.emailAddress=this.email.getEmails();
   }

  ngOnInit() {
  }

}
