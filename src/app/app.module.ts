import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule.forRoot(),
    Module1Module,
    Module2Module
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  ngDoBootstrap(app) {
    fetch('url/to/fetch/component').then(name => {
      app.bootstrap(name);
    });
  }
}
function fetch(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(AppComponent);
    }, 0);
  });
}
