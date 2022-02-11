import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, pipe } from 'rxjs';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  characterInfo: any = {};
  characterThumbnail: any = {};

  constructor(
    private actRoute: ActivatedRoute,
    private http: CharacterService
  ) {}

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((p: ParamMap) => {
      let id = p.get('id');
      if (id != null) {
        this.getCharacterDetailsHandler(+id);
      }
    });
  }

  getCharacterDetailsHandler(id: number) {
    let resp$ = this.http.getCharacterDetails(id).pipe(
      map((character) => {
        return character.data.results;
      })
    );

    resp$.subscribe((resp) => {
      if (resp.length > 0) {
        this.characterInfo = resp[0];

        this.characterThumbnail = { ...this.characterInfo.thumbnail };
      }
    });
  }
}
