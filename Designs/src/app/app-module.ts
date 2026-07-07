import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HeaderTop } from './shared/header-top/header-top';
import { Navbar } from './shared/navbar/navbar';
import { Navbar2 } from './shared/navbar-2/navbar-2';
import { Navbar3 } from './shared/navbar-3/navbar-3';
import { Sidebar } from './shared/sidebar/sidebar';
import { Sidebar2 } from './shared/sidebar-2/sidebar-2';

import { Footer } from './footer/footer';
import { FloatingButton } from './floating-button/floating-button';
import { Captcha } from './captcha/captcha';

import { MainLayout } from './layouts/main-layout/main-layout';
import { SecondLayout } from './layouts/second-layout/second-layout';
import { ThirdLayout } from './layouts/third-layout/third-layout';

import { MainContent } from './main-content/main-content';
import { MainContent2 } from './main-content-2/main-content-2';
import { MainContent3 } from './main-content-3/main-content-3';

import { WarehouseInformation } from './warehouse-information/warehouse-information';

import { BankInfo } from './bank-info/bank-info';
import { Summary } from './summary/summary';

import { AcknowledgementPopup } from './shared/acknowledgement-popup/acknowledgement-popup';
import { Form } from './form/form';



import { BenefitService } from './benefit-service/benefit-service';

import { WareHouseDimensions } from './ware-house-dimensions/ware-house-dimensions';
import { WareHouseManagerInformation } from './ware-house-manager-information/ware-house-manager-information';
import { AdditionalService } from './additional-service/additional-service';
import { ProgressIndicator } from './shared/progress-indicator/progress-indicator';

@NgModule({
  declarations: [
    App,
    HeaderTop,
    Navbar,
    Navbar2,
    Navbar3,
    Sidebar,
    Sidebar2,
    Footer,
    FloatingButton,
    Captcha,
    MainContent,
    MainContent3,
    
    
    MainContent2,
    Navbar3,

    MainLayout,
    SecondLayout,
    ThirdLayout,


    WarehouseInformation,
  
    BankInfo,
    Summary,
  
    BenefitService,
    WareHouseDimensions,
    WareHouseManagerInformation,
    AdditionalService,
    ProgressIndicator,
  ],
  
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AcknowledgementPopup,
    Form
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App]
})
export class AppModule {}