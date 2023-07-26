import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


import { UserWebsiteComponent } from './user-website/user-website.component';
import { PolicyComponent } from './policy/policy.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { MatBadgeModule } from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import { FaqComponent } from './faq/faq.component';
import { HttpClientModule } from '@angular/common/http';

import { EditableshopComponent } from './editableshop/editableshop.component';
import { IndexComponent } from './index/index.component';
import { MedDetailsComponent } from './med-details/med-details.component';
import { UserIndexComponent } from './user-index/user-index.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserWebsiteComponent,
    PolicyComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ShopComponent,
    FaqComponent,
    EditableshopComponent,
    IndexComponent,
    MedDetailsComponent,
    UserIndexComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatBadgeModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
