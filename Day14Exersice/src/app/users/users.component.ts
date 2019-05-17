import {Component, Input, OnInit} from '@angular/core';
// import {AppModule} from ''
import {DataserviceService} from '../dataservice.service';
@Component({
  selector: 'app-users',
  template: `
    <div>
      {{this.data}}
    </div>
  `,
  styles: [],
  providers: [DataserviceService]
})
export class UsersComponent{
  @Input() data;
  constructor(private DataserviceService:DataserviceService) {
    this.data = JSON.parse(this.DataserviceService.getCatchedData());
  }

}
