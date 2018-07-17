import { Component, SimpleChanges, OnInit, OnChanges, AfterViewInit, AfterContentInit, Input, ViewChild } from '@angular/core';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit, DoCheck {
  @Input() myinput;
  isTrue = true;

  @ViewChild('ref1') ref1;
  @ViewChild('ref2') ref2;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Inside onChnages');
  }

  ngOnInit() {
    console.log('Inside Init');
    console.log(this.ref1);
    console.log(this.ref2);
  }

  ngDoCheck() {
    console.log('Inside do check');
  }

  ngAfterViewInit() {
    console.log('Inside after view init');
  }

  ngAfterContentInit() {
    console.log('Inside after content init');
  }

}
