import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  
public allowNewServer = false;  
serverCreationStatus = 'No server was created!';
serverName = '';
serverCreated = false;
servers = [
  'Testserver1',
  'Testserver2'
]

onCreateServer(){
  this.servers.push(this.serverName);
  this.serverCreated = true;
  this.serverCreationStatus = 'Server was created! With name of ' + (this.serverName);
}
// onUpdateServerName(event:any){
// this.serverName = event.target.value
// }
}
