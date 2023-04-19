import { Component } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

public employees = [] as any;

constructor(private _m:MainService){};

ngOnInit(){
  this._m.getEmployees()
  .subscribe(data => this.employees = data);
}

}
