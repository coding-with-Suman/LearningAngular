import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router : Router){

  }

  // basic data type of typescript -> string, number, boolean, date

  title : string = "Starting angular with typescript";  // string

  titleCode : number = 123; // number

  CurrentDate : Date = new Date();   // date
  stateName : string = "INDIA"; // string


  typeOfBox : string = "date"; // string
  firstName = signal("Rahul"); // signal




  showAlert(message : string){
    alert(message);  // alert box

  }

  ChangeName(){
    this.firstName.set("Suman");
  }

  GotoDirectives(){
    // this.router.navigate(['/Directives']);
    this.router.navigateByUrl('Directives');
  }


}
