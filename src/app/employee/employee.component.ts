import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  emps : Employee[] = [];

  constructor(private empService:EmployeeService){}
  
  
  ngOnInit(): void {
    this.getEmployees();
  }


  public getEmployees()
  {
     this.empService.getEmployees().subscribe((records)=>{

      this.emps = records;
     });
  }





}
