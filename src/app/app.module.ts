import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameDirective } from './directives/name.directive';
import { PhoneDirective } from './directives/phone.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NameDirective,
    PhoneDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
