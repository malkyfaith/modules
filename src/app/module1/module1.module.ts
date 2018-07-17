import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './components/custom/custom.component';
import { CustomService } from '../core/services/custom.service';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [CustomComponent],
  exports: [CustomComponent]
})
export class Module1Module { }
