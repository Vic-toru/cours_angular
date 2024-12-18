import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DataBindingComponent } from './tp/data-binding/data-binding.component';
import { ListCatsComponent } from './list-cats/list-cats.component';
import { DirectivesComponent } from './tp/directives/directives.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list-friends', component: ListFriendsComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'list-cats', component: ListCatsComponent },
  { path: 'directives', component: DirectivesComponent },
  // { path: 'app-component-manip',component: ComponentManipComponent},
  // Test en mode lazy loading
  { path: 'app-component-manip', loadComponent: () => import('./tp/component-manip/component-manip.component').then(m => m.ComponentManipComponent) },
  { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) },
];