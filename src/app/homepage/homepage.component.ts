import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
      
  constructor() { }
  //ngfor directive example
     employees=[
       {
         empid:1,
         empName:'sweta',
         empPhots:'https://image.shutterstock.com/image-photo/cropped-image-female-holding-smartphone-600w-1099878668.jpg',
         empSal:'1000',
         empCompany:'testyantra',
         empLoc:'blr',
         empDoJ:new Date('19/7/1994'),
         empDesgination:'BE',
         empClg:'PESITM'
       },
       {
        empid:2,
        empName:'RAMYA',
        empPhots:'https://image.shutterstock.com/image-photo/cropped-image-female-holding-smartphone-600w-1099878668.jpg',
        empSal:'20000',
        empCompany:'capgimini',
        empLoc:'pune',
        empDOJ:new Date('19/7/2001'),
        empDesgination:'BE',
        empClg:'PESITM'
       },
     ];
     //call add method
     addEmp(){
       this.employees.unshift({
        empid:1,
        empName:'RAMYA',
        empPhots:'https://image.shutterstock.com/image-photo/cropped-image-female-holding-smartphone-600w-1099878668.jpg',
        empSal:'1000',
        empCompany:'testyantra',
        empLoc:'blr',
        empDoJ:new Date('19/7/1994'),
        empDesgination:'BE',
        empClg:'PESITM'
       });
     }
     removeEmp(emp){
       let index=this.employees.indexOf(emp);
       this.employees.splice(index,1);
     }
     color:"red"
  ngOnInit() {
  }

}
