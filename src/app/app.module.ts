import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { courseComponent } from './course.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MenuComponent } from './menu/menu.component';
import { EmployeeModule } from './employee/employee.module';

import { LanguagesComponent } from './languages/languages.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomDirective } from './custom.directive'
import { SignComponent } from './sign/sign.component';
import { ContactComponent } from './contact/contact.component';
import { ButtonComponent } from './button/button.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    courseComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    LanguagesComponent,
    HomepageComponent,
    PagenotfoundComponent,
    CustomDirective,
    SignComponent,
    ContactComponent,
    ButtonComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule, EmployeeModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'sign', component: SignComponent },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
