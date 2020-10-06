import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormInventarioComponent } from './components/form-inventario/form-inventario.component';
import { RegisterComponent } from './components/register/register.component';
import { TablaComponentComponent } from './components/tabla-component/tabla-component.component';
import { RouteLoginComponent } from './routes/route-login/route-login.component';
import { RouteRegisterComponent } from './routes/route-register/route-register.component';
import { RouteHomeComponent } from './routes/route-home/route-home.component';
import { AppRoutingModules } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FormInventarioComponent,
    RegisterComponent,
    TablaComponentComponent,
    RouteLoginComponent,
    RouteRegisterComponent,
    RouteHomeComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        ReactiveFormsModule,
        AppRoutingModules
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
