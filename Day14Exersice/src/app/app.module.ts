import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataserviceService} from './dataservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersComponent} from "./users/users.component";
import {HttpClientModule} from "@angular/common/http";
import {UsersModule} from "./users/users.module";
import {RouterModule} from "@angular/router";
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    RouterModule.forRoot([
      {path: 'users',component:UsersComponent}
    ])

  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
