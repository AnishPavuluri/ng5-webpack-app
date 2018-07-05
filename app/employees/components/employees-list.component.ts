import { Component } from "@angular/core";

import { Employee } from "../models/employee";

@Component({
    selector: 'employee-list',
    templateUrl: '../views/employees-list.component.html'
})
export class EmployeeListComponent {
    title: string = "Anish Technologies Employees List";
    //employee: Employee = new Employee();
    constructor() {
        // this.employee.employeeId = 100;
        // this.employee.employeeName = "Manish Kaushik";
        // this.employee.city = "Raipur";
        // this.employee.email = "manish.kaushik@Anish Technologies.com";
        // this.employee.phone = "+91 23727328";
        // this.employee.avatar = "images/noimage.png"
    }
    employees: Employee[] = [
        {
            employeeId: 100,
            employeeName: "Manish Kaushik",
            city: "Raipur",
            phone: "+91 237283782",
            email: "manish.k@Anish Technologies.com",
            avatar: "images/noimage.png"
        },
        {
            employeeId: 101,
            employeeName: "Pravinkumar R. D.",
            city: "Pune",
            phone: "+91 349898989",
            email: "pravinkrd@Anish Technologies.com",
            avatar: "images/noimage.png"
        },
        {
            employeeId: 102,
            employeeName: "Ali Hasan",
            city: "Dubai",
            phone: "+71 2389283923",
            email: "ali.hasan@Anish Technologies.com",
            avatar: "images/noimage.png"
        }
    ];
    selectedEmployee: Employee;
    message: string="";
    sendEmployeeDetails(emp: Employee): void {
        this.selectedEmployee = emp;
    }
    childMessage(msg: string): void {
        this.message = msg;
    }
}