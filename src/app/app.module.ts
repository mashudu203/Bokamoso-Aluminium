import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WindowsComponent } from './pages/windows/windows.component';
import { GatesComponent } from './pages/gates/gates.component';
import { SlidingComponent } from './pages/sliding/sliding.component';
import { BulglarComponent } from './pages/bulglar/bulglar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    WindowsComponent,
    GatesComponent,
    SlidingComponent,
    BulglarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,NgbPaginationModule, NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
