import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow-statement',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-flow-statement.component.html',
  styleUrl: './control-flow-statement.component.css'
})
export class ControlFlowStatementComponent {

  isDiv1Show : boolean = true;
  isDiv2Show : boolean = true;
  num1 : string = '';
  num2 : string = '';
  SelectedValue : string = '';

  HideDiv1(){
    this.isDiv1Show = false;
  }

  ShowDiv1(){
    this.isDiv1Show = true;
  }

  Toggle(){
    this.isDiv2Show = !this.isDiv2Show;
  }

  cityArray : string[] = ['Hyderabad', 'Bangalore', 'Chennai', 'Mumbai', 'Delhi'];

  StudentObject : any [] = [
    {id: 1, name: 'Rahul', city: 'Hyderabad', isactive : true},
    {id: 2, name: 'Suman', city: 'Malda', isactive : true},
    {id: 3, name: 'Jao', city: 'Kolkata', isactive : false},
    {id: 4, name: 'John', city: 'Pune', isactive : true},
  ]

  textInputBox : string = '';
  outputDivTex : string = '';
}
