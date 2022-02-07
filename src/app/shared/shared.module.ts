import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from './services/character.service';
import { CharacterCardComponent } from './character-card/character-card.component';
import { SearchbarComponent } from './searchbar/searchbar.component';



@NgModule({
  declarations: [
    CharacterCardComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CharacterService
  ],exports:[CharacterCardComponent,SearchbarComponent]
})
export class SharedModule { }
