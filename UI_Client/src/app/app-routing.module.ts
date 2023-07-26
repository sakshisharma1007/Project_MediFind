import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PolicyComponent } from './policy/policy.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { FaqComponent } from './faq/faq.component';

import { EditableshopComponent } from './editableshop/editableshop.component';
import { IndexComponent } from './index/index.component';
import { MedDetailsComponent } from './med-details/med-details.component';





const routes: Routes = [
  { path: '', redirectTo: '/home/index', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent,
  children:[
    { path: 'index', component:IndexComponent},
    { path: 'about', component: AboutComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'med', component:MedDetailsComponent},
    { path: 'contact', component: ContactComponent },

  ]},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'editableshop', component: EditableshopComponent },
  { path: 'faq', component: FaqComponent }
  ]
  




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
