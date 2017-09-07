// External
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Internal
import { AboutComponent } from './components/about/about.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { SoftwareComponent } from './components/software/software.component';

const AppRoutes: Routes = [
  { 
    path: '',
    redirectTo: "/about",
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'photography',
    component: PhotographyComponent
  },
  {
    path: 'software',
    component: SoftwareComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);