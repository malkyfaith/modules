import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './components/other/other.component';
import { CoreModule } from '../core/core.module';
import { CustomService } from '../core/services/custom.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [OtherComponent],
  exports: [OtherComponent]
})
export class Module2Module { }
