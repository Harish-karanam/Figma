import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContent2 } from './main-content-2/main-content-2';
import { MainContent } from './main-content/main-content';
import { Navbar2 } from './shared/navbar-2/navbar-2';
import { MainLayout } from './layouts/main-layout/main-layout';
import { SecondLayout } from './layouts/second-layout/second-layout';
import { Sidebar2 } from './shared/sidebar-2/sidebar-2';

// const routes: Routes = [
//   //main-layout
//   {
//     path:'',
//     component:MainContent
//   },
//   {
//     path: 'main-content-2',
//     component: MainContent2
//   },
//   {
//     path:'navbar-2',
//     component:Navbar2
//   },

//    {
//     path: '',
//     component: MainLayout
//   },
//   {
//     path: 'second-layout',
//     component: SecondLayout
//   },

//   //second layout
//   {
//     path:'main-layout',
//     component:MainLayout
//   },
//   {
//     path:'second-layout',
//     component:SecondLayout
//   }
 
// ];

const routes: Routes = [

  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: MainContent
      },
       {
        path: 'main-content-2',
        component: MainContent2
      }
      
    ]
  },

  {
    path: 'second-layout',
    component: SecondLayout,
    children: [
      {
        path: '',
        component: MainContent2
      },
      {
        path:'sidebar-2',
        component:Sidebar2
      }
    ]
  }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
