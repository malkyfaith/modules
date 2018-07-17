import { Component, OnInit } from '@angular/core';
import { CustomService } from '../../../core/services/custom.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  constructor(private service: CustomService) { }

  ngOnInit() {
    console.log(this.service.getData());
    this.service.setData('updated by module1 custom component');
  }

}
