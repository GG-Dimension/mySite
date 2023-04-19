import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

// public name = '';

// public tx = '';
// onClick(){
// this.tx = 'hello '+ this.name;
// }

// public serverStatus = 'offline';

// getServerStatus(){
//   return this.serverStatus;
// }
serverStatus: string ='offline';
serverId:number = 5;

public online = 'online';

constructor(){
this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
}

getServerStatus(){
  return this.serverStatus;
}

getColor(){
return this.serverStatus === 'online' ? 'green' : 'red';

}

public userName = '';
public buttonDisabler = true;

myClick(){
  this.userName = '';
}
}
