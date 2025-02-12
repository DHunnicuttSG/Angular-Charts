import { HttpClient, provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MyChart2Component } from './Components/my-chart2/my-chart2.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
      AppComponent,
      MyChart2Component, // Your component
      // ... other components
    ],
    imports: [
      BrowserModule,
      HttpClient, // Add HttpClientModule here
      // ... other modules
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
export class AppModule { }