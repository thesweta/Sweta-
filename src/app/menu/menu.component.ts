import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/Forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   course=new FormGroup({
     topic:new FormArray([])
   });
  constructor() { }
    addTopics(topic){
      (this.course.get("topics") as FormArray).push(new FormControl(topic.value));
      topic.value=" ";
    }
  ngOnInit() {
  }

}
