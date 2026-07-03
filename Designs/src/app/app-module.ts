// import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing-module';
// import { App } from './app';
// import { Footer } from './footer/footer';

// import { HeaderTop } from './shared/header-top/header-top';
// import { Navbar } from './shared/navbar/navbar';
// import { Sidebar } from './shared/sidebar/sidebar';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { FloatingButton } from './floating-button/floating-button';
// import { Captcha } from './captcha/captcha';

// @NgModule({
//   declarations: [App, HeaderTop, Navbar, Sidebar, Footer, FloatingButton, Captcha],
// import { MainContent } from './main-content/main-content';

// @NgModule({
//   declarations: [App, HeaderTop, Navbar, Sidebar, MainContent],
//   imports: [BrowserModule, AppRoutingModule, MatToolbarModule, MatButtonModule, MatIconModule],
//   providers: [provideBrowserGlobalErrorListeners()],
//   bootstrap: [App],
// })
// export class AppModule {}

// import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing-module';
// import { App } from './app';
// import { Footer } from './footer/footer';

// import { HeaderTop } from './shared/header-top/header-top';
// import { Navbar } from './shared/navbar/navbar';
// import { Sidebar } from './shared/sidebar/sidebar';
// import { Footer } from './shared/footer/footer';
// import { FloatingButton } from './shared/floating-button/floating-button';
// import { Captcha } from './shared/captcha/captcha';
// import { MainContent } from './main-content/main-content';

// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';

// import { MainContent2 } from './main-content-2/main-content-2';
// =======
// import { FloatingButton } from './floating-button/floating-button';
// import { Captcha } from './captcha/captcha';

// @NgModule({
//   declarations: [App, HeaderTop, Navbar, Sidebar, Footer, FloatingButton, Captcha],
// import { MainContent } from './main-content/main-content';
// >>>>>>> main

// @NgModule({
//   declarations: [
//     App,
//     HeaderTop,
//     Navbar,
//     Sidebar,
//     Footer,
//     FloatingButton,
//     Captcha,
//     MainContent,
//     MainContent2,
//   ],

//   imports: [BrowserModule, AppRoutingModule, MatToolbarModule, MatButtonModule, MatIconModule],
//   providers: [provideBrowserGlobalErrorListeners()],
//   bootstrap: [App],
// })
// export class AppModule {}

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderTop } from './shared/header-top/header-top';
import { Navbar } from './shared/navbar/navbar';
import { Sidebar } from './shared/sidebar/sidebar';
import { Footer } from './footer/footer';
import { FloatingButton } from './floating-button/floating-button';
import { Captcha } from './captcha/captcha';
import { MainContent } from './main-content/main-content';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MainContent3 } from './main-content-3/main-content-3';

import { Sidebar2 } from './shared/sidebar-2/sidebar-2';
import { MainContent2 } from './main-content-2/main-content-2';
import { Navbar2 } from './shared/navbar-2/navbar-2';
import { MainLayout } from './layouts/main-layout/main-layout';
import { SecondLayout } from './layouts/second-layout/second-layout';

import { Warehousedetails } from './warehousedetails/warehousedetails';
import { AcknowledgementPopup } from './shared/acknowledgement-popup/acknowledgement-popup';

import { ThirdLayout } from './layouts/third-layout/third-layout';
import { BenefitService } from './benefit-service/benefit-service';
import { Navbar3 } from './shared/navbar-3/navbar-3';
import { ReactiveFormsModule } from '@angular/forms';
import { WareHouseDimensions } from './ware-house-dimensions/ware-house-dimensions';
import { WareHouseManagerInformation } from './ware-house-manager-information/ware-house-manager-information';
import { AdditionalService } from './additional-service/additional-service';
import { ProgressIndicator } from './shared/progress-indicator/progress-indicator';

@NgModule({
  declarations: [
    App,
    HeaderTop,
    Navbar,
    Sidebar,
    Footer,
    FloatingButton,
    Captcha,
    MainContent,
    MainContent3,
    Navbar2,
    Sidebar2,
    MainContent2,
    Navbar3,

    MainLayout,
    SecondLayout,
    Sidebar2,
    Warehousedetails,
    ThirdLayout,
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
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
