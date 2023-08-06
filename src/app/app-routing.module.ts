import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllComponent} from "./components/all/all.component";
import {NewComponent} from "./components/new/new.component";
import {FindComponent} from "./components/find/find.component";
import {UpdateComponent} from "./components/update/update.component";
import {DeleteComponent} from "./components/delete/delete.component";

const routes: Routes = [
  {path:'',redirectTo:'/all', pathMatch:"full"},
  {path:'all',component:AllComponent},
  {path:'new',component:NewComponent},
  {path:'find',component:FindComponent},
  {path:'update',component:UpdateComponent},
  {path:'delete',component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
