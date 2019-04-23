import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { HeaderComponent } from 'src/app/Components/header/header.component';
import { SideNavComponent } from 'src/app/Components/side-nav/side-nav.component';
import { DefaultComponent } from 'src/app/Components/default/default.component';
import { ProjectsComponent } from 'src/app/Components/projects/projects.component';
import { ContactComponent } from 'src/app/Components/contact/contact.component';
import { HireComponent } from './Components/hire/hire.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProjectModalComponent } from './Components/project-modal/project-modal.component';

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    DefaultComponent,
    ProjectsComponent,
    ContactComponent,
    HireComponent,
    FooterComponent,
    ProjectModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
