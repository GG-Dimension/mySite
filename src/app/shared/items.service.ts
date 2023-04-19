import { Injectable } from "@angular/core";
import { Example } from "./laptop.model";

@Injectable({providedIn: 'root'})
export class ItemsService{
    laptops: Example[] = [
        {brand: 'Asus', done:true},
        {brand: 'Msi', done:false},
        {brand: 'Alienware',done:true},
        {brand: 'Razer', done:false},
        {brand: 'Aorus', done:false}
      ];
      private saveItems(){
        localStorage.setItem('todos', JSON.stringify(this.laptops))
      }

      getItems(){
        const todoItems = localStorage.getItem('todos')
        if (todoItems) {
          this.laptops = JSON.parse(todoItems);
        }
        return this.laptops;
      }

      addItem(newItemDesc: string){
        this.laptops.unshift({brand: newItemDesc, done:false});
        this.saveItems();
      }

      deleteItem(index: number){
      this.laptops.splice(index, 1);
      this.saveItems();
      }

      finishItem(index: number){
      this.laptops[index].done = !this.laptops[index].done;
      this.saveItems();
      }

}