import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomService } from './services/custom.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CustomService],
})
export class CoreModule { }
