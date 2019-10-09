import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BnNgIdleService } from 'bn-ng-idle'; // import bn-ng-idle service

import { AppComponent } from './components/root/app.component';

import { PortalFooterComponent } from './components/portal/portal-footer/portal-footer.component';
import { PortalHeaderComponent } from './components/portal/portal-header/portal-header.component';
import { PortalClientsComponent } from './components/portal/portal-clients/portal-clients.component';
import { PortalHomeComponent } from './components/portal/portal-home/portal-home.component';

import { LoginHomeComponent } from './components/login/login-home/login-home.component';

import { NotFoundComponent } from './components/utilities/not-found/not-found.component';
import { LoadingComponent } from './components/utilities/loading/loading.component';
import { LoadingV2Component } from './components/utilities/loading-v2/loading-v2.component';
import { PortalProfileGeneralComponent } from './components/portal/portal-profile/portal-profile-general/portal-profile-general.component';
import { PortalProfileSecurityComponent } from './components/portal/portal-profile/portal-profile-security/portal-profile-security.component';
import { PortalProfileHomeComponent } from './components/portal/portal-profile/portal-profile-home/portal-profile-home.component';
import { PortalProfileConfigurationComponent } from './components/portal/portal-profile/portal-profile-configuration/portal-profile-configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalHeaderComponent,
    PortalFooterComponent,
    LoginHomeComponent,
    PortalClientsComponent,
    PortalHomeComponent,
    NotFoundComponent,
    LoadingComponent,
    LoadingV2Component,
    PortalProfileGeneralComponent,
    PortalProfileSecurityComponent,
    PortalProfileHomeComponent,
    PortalProfileConfigurationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BnNgIdleService], // add it to the providers of your module
  bootstrap: [AppComponent]
})
export class AppModule { }
