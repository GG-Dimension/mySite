import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MySite';

  opened = true;

  openSidebar(data: null){
    this.opened = !this.opened;
  }

  dataFromFooter($event: any){
    console.log($event)
  }
}
