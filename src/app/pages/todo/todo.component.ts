import { Component,Input, OnInit } from '@angular/core';
import { Example } from 'src/app/shared/laptop.model';
import { ItemsService } from 'src/app/shared/items.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
laptops: Example[];
constructor(private itemsService: ItemsService){}

// ngOnInit(){
// this.laptops = this.itemsService.laptops;
// }

ngOnInit(){
  this.laptops = this.itemsService.getItems();
  }

@Input() myNameReciver: string;

onAddItem(newDesc: string){
  this.laptops.unshift({brand: newDesc, done:false});
}

green = 'green';

// function hi(name: string){
//   return `Hi, ${name}`;
// }

// console.log(hi["Johan"]));

// int aFunction(x){
//   if x == 1
//   return 1
//   else
//   return x * aFunction(x-1)
// }

// what will the output of aFunction(3) be?

// What will the following code print out to the cosnole ?
// import {component} from '@angular/core';
// @component({
//   selector:'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent{
//   constructor(){
//     let o = { a: 1};
//     let b = 2;
//     this.fn1(o);
//     this.fn1(b);
//     console.log(o.a);
//     console.log(b);
//   }
//   fn1(o){
//     if(o.a){
//       o.a =3;
//     }else {
//       0 =3;
//     }
//   }
// }

}
