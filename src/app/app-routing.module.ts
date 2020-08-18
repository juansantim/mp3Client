import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ConsultaComponent } from './consulta/consulta/consulta.component';
import { AuthGuard } from './Services/AuthGuard';
import { AuthGuardLogin } from './Services/AuthGuardLogin';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "", component: MainPageComponent, children: [{ path: 'consulta', component: ConsultaComponent, canActivate:[AuthGuard] }] },
  { path: "login", component: LoginComponent, canActivate: [AuthGuardLogin] },
  { path: "**", component: LoginComponent },
  //{ path: "consulta", component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
