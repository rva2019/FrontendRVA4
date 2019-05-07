import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtiklComponent } from './components/artikl/artikl.component';
import { DobavljacComponent } from './components/dobavljac/dobavljac.component';
import { PorudzbinaComponent } from './components/porudzbina/porudzbina.component';
import { HelpComponent } from './components/core/help/help.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HomeComponent } from './components/core/home/home.component';

const routes: Routes = [
  {path: 'artikl', component: ArtiklComponent},
  {path: 'dobavljac', component: DobavljacComponent},
  {path: 'porudzbina', component: PorudzbinaComponent},
  {path: 'pomoc', component: HelpComponent},
  {path: 'autor', component: AuthorComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
