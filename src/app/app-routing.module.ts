import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DefaultComponent } from './layout/default/default.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'characters', component: HomeComponent },
      { path: 'comics', component: HomeComponent },
      { path: 'movies', component: HomeComponent },
      { path: 'character-details/:id', component: CharacterDetailsComponent },
      { path: 'login', component: LoginComponent },
      {path:'admin', component:AdminComponent, canActivate:[AuthGuard]}
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
