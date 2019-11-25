import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  
  isActive="true";
  colSpan=4;
  color=true;
  clickEvent(even){
      console.log(event);
  }
  keyupEvent(event){
    console.log(event.target.value);
  }//this is javascript way
//chencking email with temple varibale and getting value through angular way
enterEmail(x){
  console.log('my email is',x)
}
  constructor() { }

  ngOnInit() {
  }

}
