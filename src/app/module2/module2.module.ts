import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './components/other/other.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OtherComponent],
  exports: [OtherComponent]
})
export class Module2Module { }
