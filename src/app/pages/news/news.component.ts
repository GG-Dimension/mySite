import { Component } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

userName = '';
resetInput(){
  this.userName = '';
}

gl = true;
inputDisabler = true;
green = 'green';
red = 'red';
yellow = 'yellow';
violet = 'violet';

myName = 'Rezo'
inputValue = '';
inputData: string;

sendData(){
this.inputData = this.inputValue;
}


colorChange(){
  this.gl =!this.gl;
}
onChange(){
 this.inputDisabler = !this.inputDisabler; 
}


selectedColor = '';


}
