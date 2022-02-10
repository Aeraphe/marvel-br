import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from './services/character.service';
import { CharacterCardComponent } from './character-card/character-card.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AuthenticateService } from './services/authenticate.service';



@NgModule({
  declarations: [
    CharacterCardComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CharacterService,
    AuthenticateService
  ],exports:[CharacterCardComponent,SearchbarComponent]
})
export class SharedModule { }
