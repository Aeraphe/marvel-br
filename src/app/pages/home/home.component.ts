import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CharacterService } from '../../shared/services/character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  characters$: Observable<any> = new Observable<any>();

  constructor(private http: CharacterService, private router: Router) {}

  ngOnInit(): void {}

  onChangeInput(searchText: string) {
    this.characters$ = this.http.getCharacters(searchText).pipe(
      map((item) => {
        return item.data.results;
      })
    );
  }

  showCharacterDetails(id: number) {
    this.router.navigate(['/character-details/' + id]);
  }
}
