import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { HomeComponent } from './Components/home/home.component';
import { DirectivesComponent } from './Components/directives/directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddEmployeeComponent, HomeComponent, DirectivesComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyApp';
}
