import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './components/custom/custom.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomComponent],
  exports: [CustomComponent]
})
export class Module1Module { }
