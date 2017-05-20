import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   buttonClick= false;
   click = '';
   logMessage = '';
   logs = [];

   constructor() {

   }
   onDisplayDetails() {
        this.onLoggingClick();
        this.buttonClick = !this.buttonClick;
        this.click = 'clicked';
         
   }

   onLoggingClick() {
       this.logMessage = 'Number of button clicked is ';
       this.logs.push(this.logMessage); 
   }

}
