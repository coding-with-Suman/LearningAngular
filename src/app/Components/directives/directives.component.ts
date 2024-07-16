import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  // ************* Structural Directives *****************************
  isVisiableDiv1 : boolean = true;
  isChecked : boolean = true;
  SelectedValue : string = '';
  isToggle : boolean = true;
  num1 : string = '';
  num2 : string = '';

  cityArray : string[] = ['Hyderabad', 'Bangalore', 'Chennai', 'Mumbai', 'Delhi'];

  StudentObject : any [] = [
    {id: 1, name: 'Rahul', city: 'Hyderabad', isactive : true},
    {id: 2, name: 'Suman', city: 'Malda', isactive : true},
    {id: 3, name: 'Jao', city: 'Kolkata', isactive : false},
    {id: 4, name: 'John', city: 'Pune', isactive : true},
  ]

  FunDiv1(isVisiable : boolean){
    this.isVisiableDiv1 = isVisiable;
  }

  Toggle(){
    this.isToggle = !this.isToggle;
  }

  // ********************* Attribute Directives *********************

  div1BgColor : string = "bg-primary";
  div2BgColorToggle : string = "bg-primary";
  isDiv2Actice : boolean = true;
  num3 : string = '';
  num4 : string = '';
  isChecked1 : boolean = true;


  AddRedColor(){
    this.div1BgColor = "bg-danger";
  }

  AddBlueColor(){
    this.div1BgColor = "bg-primary";
  }

  ToggleDiv2Color(){
    // this.div2BgColorToggle = this.div2BgColorToggle == "bg-primary" ?  "bg-danger" : "bg-primary";
    this.isDiv2Actice = !this.isDiv2Actice;
  }

  StudentObjectNew : any [] = [
    {id: 1, name: 'Rahul', city: 'Hyderabad', TotalMarks:25, isactive : true},
    {id: 2, name: 'Suman', city: 'Malda', TotalMarks:50, isactive : true},
    {id: 3, name: 'Jao', city: 'Kolkata', TotalMarks:75, isactive : false},
    {id: 4, name: 'John', city: 'Pune', TotalMarks:95, isactive : true},
  ]

  CustomCssObject : any = {
    'font-size': '15px',
    'color': 'red',
    'width' : '100px',
    'height' : '100px',
    'background-color' : 'green',
    'border-radius' : '50%',
    'text-align' : 'center'
  }



}
