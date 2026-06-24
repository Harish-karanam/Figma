import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Footer } from './footer/footer';

import { HeaderTop } from './shared/header-top/header-top';
import { Navbar } from './shared/navbar/navbar';
import { Sidebar } from './shared/sidebar/sidebar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FloatingButton } from './floating-button/floating-button';
import { Captcha } from './captcha/captcha';

@NgModule({
  declarations: [App, HeaderTop, Navbar, Sidebar, Footer, FloatingButton, Captcha],
import { MainContent } from './main-content/main-content';

@NgModule({
  declarations: [App, HeaderTop, Navbar, Sidebar, MainContent],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, MatButtonModule, MatIconModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
