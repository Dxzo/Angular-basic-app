import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginHomeComponent } from './components/login/login-home/login-home.component';

import { PortalClientsComponent } from './components/portal/portal-clients/portal-clients.component';
import { PortalHomeComponent } from './components/portal/portal-home/portal-home.component';

import { PortalProfileHomeComponent } from './components/portal/portal-profile/portal-profile-home/portal-profile-home.component';
import { PortalProfileGeneralComponent } from './components/portal/portal-profile/portal-profile-general/portal-profile-general.component';
import { PortalProfileSecurityComponent } from './components/portal/portal-profile/portal-profile-security/portal-profile-security.component';
import { PortalProfileConfigurationComponent } from './components/portal/portal-profile/portal-profile-configuration/portal-profile-configuration.component';

import { NotFoundComponent } from './components/utilities/not-found/not-found.component';

const routes: Routes = [
  { path: 'sign-in', component: LoginHomeComponent },
  {
    path: 'portal', component: PortalHomeComponent, children: [
      {
        path: 'profile', component: PortalProfileHomeComponent, children: [
          { path: 'general', component: PortalProfileGeneralComponent },
          { path: 'configuration', component: PortalProfileConfigurationComponent },
          { path: 'security', component: PortalProfileSecurityComponent }
        ]
      },
      { path: 'clients', component: PortalClientsComponent }
    ]
  },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
