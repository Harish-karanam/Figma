import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContent } from './main-content/main-content';
import { MainContent3 } from './main-content-3/main-content-3';
import { MainContent2 } from './main-content-2/main-content-2';
import { Navbar2 } from './shared/navbar-2/navbar-2';
import { MainLayout } from './layouts/main-layout/main-layout';
import { SecondLayout } from './layouts/second-layout/second-layout';
import { Sidebar2 } from './shared/sidebar-2/sidebar-2';
import  {Form} from './form/form';
import { ThirdLayout } from './layouts/third-layout/third-layout';
import { WarehouseInformation } from './warehouse-information/warehouse-information';
import { BankInfo } from './bank-info/bank-info';

import { Warehousedetails } from './warehousedetails/warehousedetails';

import { BenefitService } from './benefit-service/benefit-service';
import { WareHouseDimensions } from './ware-house-dimensions/ware-house-dimensions';
import { WareHouseManagerInformation } from './ware-house-manager-information/ware-house-manager-information';
import { AdditionalService } from './additional-service/additional-service';

// const routes: Routes = [
//   {
//     path:'',
//     component:MainContent
//   },
//   {
//     path:'main-content-2',
//     component:MainContent2
//   },
//   {
//     path:'main-content-3',
//     component:MainContent3
//   }
// ];


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
      },
      {
        path: 'main-content-3',
        component: MainContent3
      }
       
      
    ]
  },

  {
    path: 'second-layout',
    component: SecondLayout,
    children: [
      {
        path:'warehousedetails',
        component:Warehousedetails
      },
      
       {
        path: 'sidebar-2',
        component: Sidebar2
      },
     
    ]
  },

  {
    path: 'third-layout',
    component: ThirdLayout,
    children: [
      {
        path: 'form',
        component:Form
      },
       {
        path: 'warehouse-information',
        component:WarehouseInformation
      },
      {
        path:'bank-info',
        component:BankInfo
      },
       {
        path:'benefit-service',
        component:BenefitService
      },
      {
        path:'ware-house-dimensions',
        component:WareHouseDimensions
      },
      {
        path:'ware-house-manager-information',
        component:WareHouseManagerInformation
      },
      {
        path:'additional-service',
        component:AdditionalService
      }
     
      
      
    ]
  },

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
