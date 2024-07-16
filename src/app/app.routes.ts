import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { DirectivesComponent } from './Components/directives/directives.component';
import { ControlFlowStatementComponent } from './Components/control-flow-statement/control-flow-statement.component';

export const routes: Routes = [
    {
        path: 'Home',
        component:HomeComponent
    },
    {
        path: 'Add-Employee',
        component : AddEmployeeComponent
    },
    {
        path: 'Directives',
        component : DirectivesComponent
    },
    {
        path: 'ControlFlow',
        component : ControlFlowStatementComponent
    }
];
