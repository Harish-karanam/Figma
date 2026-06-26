import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContent } from './main-content/main-content';
import { MainContent3 } from './main-content-3/main-content-3';
const routes: Routes = [
  {
    path:'',
    component:MainContent
  },
  {
    path:'main-content-3',
    component:MainContent3
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
