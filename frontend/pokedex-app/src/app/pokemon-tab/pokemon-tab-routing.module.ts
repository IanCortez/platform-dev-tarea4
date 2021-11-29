import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonTabPage } from './pokemon-tab.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonTabPage
  },
  {
    path: 'view/:pokemon_id',
    loadChildren: () => import('./pokemon-view/pokemon-view.module').then( m => m.PokemonViewPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./pokemon-create/pokemon-create.module').then( m => m.PokemonCreatePageModule)
  },
  {
    path: 'edit/:pokemon_id',
    loadChildren: () => import('./pokemon-edit/pokemon-edit.module').then( m => m.PokemonEditPageModule)
  },
  {
    path: 'delete/:pokemon_id',
    loadChildren: () => import('./pokemon-delete/pokemon-delete.module').then( m => m.PokemonDeletePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonTabPageRoutingModule {}
