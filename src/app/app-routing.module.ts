import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashboardComponent},

{path:'cart',component:CartComponent},

{path:'orders',component:OrdersComponent},
{path:'search',component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
