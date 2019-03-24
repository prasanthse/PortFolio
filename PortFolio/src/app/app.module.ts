import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { HeaderComponent } from 'src/app/Components/header/header.component';
import { SideNavComponent } from 'src/app/Components/side-nav/side-nav.component';
import { DefaultComponent } from 'src/app/Components/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
