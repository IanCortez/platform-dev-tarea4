import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonTabPageRoutingModule } from './pokemon-tab-routing.module';

import { PokemonTabPage } from './pokemon-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PokemonTabPageRoutingModule
  ],
  declarations: [PokemonTabPage]
})
export class PokemonTabPageModule {}
