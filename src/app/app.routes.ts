import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'app-component-manip',component: ComponentManipComponent},
  // Test en mode lazy loading
  { path: 'app-component-manip', loadComponent: () => import('./tp/component-manip/component-manip.component').then(m => m.ComponentManipComponent) },
];