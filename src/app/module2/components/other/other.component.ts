import { Component, OnInit } from '@angular/core';
import { CustomService } from '../../../core/services/custom.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor(private service: CustomService) { }

  ngOnInit() {
    console.log(this.service.getData());
    this.service.setData('updated by module2 other component');
  }
}
