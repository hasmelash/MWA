import {Component, OnInit} from '@angular/core';
import { DataserviceService} from './dataservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  //data$;
  constructor(private DataserviceService:DataserviceService){}
  ngOnInit(): void {
    this.DataserviceService.getOnlineData();
  }
  // getOnlineData(){
  //   this.data$=this.DataserviceService.getOnlineData();
  // }


}
