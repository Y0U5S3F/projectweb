import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ChooseComponent } from './components/choose/choose.component';
import { ContactComponent } from './components/contact/contact.component';
import { JoinComponent } from './components/join/join.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableOffreComponent } from './components/table-offre/table-offre.component';
import { AddOffreComponent } from './components/add-offre/add-offre.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalendarClientComponent } from './pages/calendar-client/calendar-client.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OffreAdminComponent } from './pages/offre-admin/offre-admin.component';
import { ReclamComponent } from './pages/reclam/reclam.component';
import { HeroComponent } from './pages/home/component/hero/hero.component';
import { InfoComponent } from './pages/home/component/info/info.component';
import { FeaturesComponent } from './pages/home/component/features/features.component';
import { FormComponent } from './pages/reclam/component/form/form.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { TableCalendarComponent } from './components/table-calendar/table-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ChooseComponent,
    ContactComponent,
    JoinComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    TableOffreComponent,
    AddOffreComponent,
    CalendarClientComponent,
    HomeComponent,
    LoginComponent,
    OffreAdminComponent,
    ReclamComponent,
    HeroComponent,
    InfoComponent,
    FeaturesComponent,
    FormComponent,
    HeaderHomeComponent,
    TableCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }