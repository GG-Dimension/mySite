// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-my-input',
//   templateUrl: './my-input.component.html',
//   styleUrls: ['./my-input.component.css']
// })
// export class MyInputComponent {
// @Output() newItem: EventEmitter<string> = new EventEmitter();

// onNewItem(inputElement: HTMLInputElement){
//   this.newItem.emit(inputElement.value);
//   inputElement.value = ''
// }
// }

import { Component } from '@angular/core';
import { ItemsService } from '../shared/items.service';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css']
})
export class MyInputComponent {

constructor(private itemsService: ItemsService){}

onNewItem(inputElement: HTMLInputElement){
this.itemsService.addItem(inputElement.value);
}
}
