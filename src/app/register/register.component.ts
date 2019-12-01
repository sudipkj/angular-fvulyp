import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
    console.log("COnstructor is called");

   }
  fullName: string;
  private email : string;
  private password : string;
  private submitBtn : boolean;


  ngOnInit() {
    this.submitBtn = false;
    console.log("ngOnInit is called" + this.fullName);
  }
public onSubmit(){
  console.log("button called" + this.fullName);
}
}