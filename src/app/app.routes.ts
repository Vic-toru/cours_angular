import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DataBindingComponent } from './tp/data-binding/data-binding.component';
import { ListCatsComponent } from './list-cats/list-cats.component';
import { DirectivesComponent } from './tp/directives/directives.component';
import { BlogControlCenterComponent } from './blog-control-center/blog-control-center.component';
import { ComponentManipComponent } from './tp/component-manip/component-manip.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { UserParentComponent } from './tp/user-parent/user-parent.component';
import { ObservablesComponent } from './tp/observable/observable.component';
import { RandomComponent } from './tp/observable/random/random.component';
import { PipesComponent } from './tp/pipes/pipes.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-friends', canActivate:[AuthGuardService] , component: ListFriendsComponent },
  { path: 'data-binding', canActivate:[AuthGuardService] , component: DataBindingComponent },
  { path: 'list-cats', canActivate:[AuthGuardService] , component: ListCatsComponent },
  { path: 'directives', canActivate:[AuthGuardService] , component: DirectivesComponent },
  { path: 'blog', canActivate:[AuthGuardService] , component: BlogControlCenterComponent },
  { path: 'app-component-manip', canActivate:[AuthGuardService] , component: ComponentManipComponent},
  { path: 'pokemon-list',component: PokemonListComponent},
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: 'user', canActivate:[AuthGuardService] , component: UserParentComponent },
  { path: 'observable', canActivate:[AuthGuardService] , component: ObservablesComponent },
  { path: 'random', canActivate:[AuthGuardService] , component: RandomComponent},
  { path: 'pipes', canActivate:[AuthGuardService] , component: PipesComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },



  // Test en mode lazy loading
  { path: 'app-component-manip', loadComponent: () => import('./tp/component-manip/component-manip.component').then(m => m.ComponentManipComponent) },
  { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) },
];