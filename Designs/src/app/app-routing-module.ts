import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContent2 } from './main-content-2/main-content-2';
import { MainContent } from './main-content/main-content';

const routes: Routes = [
  {
    path:'',
    component:MainContent
  },
  {
    path: 'main-content-2',
    component: MainContent2
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
