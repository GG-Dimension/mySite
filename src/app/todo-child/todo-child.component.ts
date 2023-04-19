import { Component, Input} from '@angular/core';
import { Example } from '../shared/laptop.model';
import { ItemsService } from '../shared/items.service';


@Component({
  selector: 'app-todo-child',
  templateUrl: './todo-child.component.html',
  styleUrls: ['./todo-child.component.css']
})
export class TodoChildComponent{
@Input() ss: Example;
@Input() itemIndex: number;

constructor(private itemsService: ItemsService){}

onDelete(){
  this.itemsService.deleteItem(this.itemIndex);
}
onItemDone(){
  this.itemsService.finishItem(this.itemIndex);
}
}
