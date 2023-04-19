import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  
 constructor() {}
 ngOnInit(): void{}


content = false;
log = [];

  displayContent(){
this.content = !this.content;
// this.log.push(this.log.length + 1);

  }  
@Input() reciver: string;

}
