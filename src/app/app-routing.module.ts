import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { WindowsComponent } from './pages/windows/windows.component';
import { GatesComponent } from './pages/gates/gates.component';
import { SlidingComponent } from './pages/sliding/sliding.component';
import { BulglarComponent } from './pages/bulglar/bulglar.component';

const routes: Routes = [
  {path : '',redirectTo : '/home', pathMatch : 'full'},
  {path : 'home', component :HomeComponent},
  {path : 'about', component :AboutComponent},
  {path : 'contact', component :ContactComponent},
  {path : 'products', component :ProductsComponent},
  {path : 'windows', component :WindowsComponent},
  {path : 'gates', component :GatesComponent},
  {path : 'sliding', component :SlidingComponent},
  {path : 'bulglar', component :BulglarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
