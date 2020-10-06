import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteLoginComponent} from './routes/route-login/route-login.component';
import {RouteRegisterComponent} from './routes/route-register/route-register.component';
import {RouteHomeComponent} from './routes/route-home/route-home.component';
import {FormInventarioComponent} from './components/form-inventario/form-inventario.component';
import {TablaComponentComponent} from './components/tabla-component/tabla-component.component';

const routes: Routes = [
  {
    path: 'login',
    component: RouteLoginComponent
  },
  {
    path: 'register',
    component: RouteRegisterComponent
  },
  {
    path: 'home',
    component: RouteHomeComponent
  },
  {
    path: 'formulario',
    component: FormInventarioComponent
  },
  {
    path: 'tabla',
    component: TablaComponentComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModules {
}
