// External
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// About
import { AboutComponent } from './components/about/about.component';

// Photography
import { PhotographyComponent } from './components/photography/photography.component';
import { PhotographyPortfolioComponent } from './components/photography/photography-portfolio/photography-portfolio.component';
import { PhotographyPortfolioItemComponent } from './components/photography/photography-portfolio-item/photography-portfolio-item.component';

// Software
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
    path: 'photography/:imageGroup',
    component: PhotographyPortfolioComponent
  },
  {
    path: 'photography/:imageGroup/:image',
    component: PhotographyPortfolioItemComponent
  },
  {
    path: 'software',
    component: SoftwareComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);