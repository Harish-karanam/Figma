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
import { Navbar2 } from './shared/navbar-2/navbar-2';
import { Sidebar2 } from './shared/sidebar-2/sidebar-2';
import { MainContent2 } from './main-content-2/main-content-2';

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
  ],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, MatButtonModule, MatIconModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
