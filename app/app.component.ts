import { Component } from "@angular/core";


@Component({
    selector:'my-app',
    // template:`<h1>Welcome To Anish Technologies, Bangalore!!!</h1>
    //             <hr>
    //             <h5>Core Development Division!`
    templateUrl:'app.component.html'
})
export class AppComponent{
    title:string="Welcome To Anish Technologies Pvt. Ltd.";
    subTitle:string="IT Development Services";
}