import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainContent } from './main-content/main-content';
import { MainContent2 } from './main-content-2/main-content-2';
import { MainContent3 } from './main-content-3/main-content-3';

import { MainLayout } from './layouts/main-layout/main-layout';
import { SecondLayout } from './layouts/second-layout/second-layout';
import { ThirdLayout } from './layouts/third-layout/third-layout';

import { Sidebar2 } from './shared/sidebar-2/sidebar-2';
import { Form } from './form/form';
import { WarehouseInformation } from './warehouse-information/warehouse-information';
import { BankInfo } from './bank-info/bank-info';
import { Summary } from './summary/summary';


const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: MainContent },
      { path: 'main-content-2', component: MainContent2 },
      { path: 'main-content-3', component: MainContent3 }
    ]
  },
  {
    path: 'second-layout',
    component: SecondLayout,
    children: [
      
      { path: 'sidebar-2',
       component: Sidebar2 }
    ]
  },
  {
    path: 'third-layout',
    component: ThirdLayout,
    children: [
      { path: 'form', component: Form },
      { path: 'warehouse-information', component: WarehouseInformation },
      { path: 'bank-info', component: BankInfo },
      { path: 'summary', component: Summary }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}