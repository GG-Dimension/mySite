import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { LaptopsComponent } from './pages/laptops/laptops.component';
import { ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodoChildComponent } from './todo-child/todo-child.component';
import { MyInputComponent } from './my-input/my-input.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { MainService } from './services/main.service';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    ContactComponent,
    LaptopsComponent,
    ServerComponent,
    ServersComponent,
    TodoComponent,
    TodoChildComponent,
    MyInputComponent,
    EmployeeListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    DragDropModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
