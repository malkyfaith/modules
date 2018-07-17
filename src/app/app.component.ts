import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomService } from './core/services/custom.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private service: CustomService) {
    console.log(this.service.getData());
    this.service.setData('updated');
    console.log(this.service.getData());
  }



}
