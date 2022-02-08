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
  fetching = false;
  warning = false;
  error = false;
  searchText: string | null = '';

  constructor(private http: CharacterService, private router: Router) {}

  ngOnInit(): void {
    this.getLastSearchHandle();
  }

  private getLastSearchHandle() {
    this.searchText = sessionStorage.getItem('searchText');
    this.getCharactersHandle(this.searchText);
  }

  onChangeInput(searchText: string) {
    this.getCharactersHandle(searchText);
  }

  private getCharactersHandle(searchText: string | null) {
    try {
      if (searchText !== null && searchText !== '') {
        sessionStorage.setItem('searchText', searchText);
        this.fetching = true;
        this.warning = false;
        this.error = false;
        this.characters$ = this.http.getCharacters(searchText).pipe(
          map((item) => {
            this.fetching = false;
            if (+item.data.total === 0) {
              this.warning = true;
            }
           
            return item.data.results;
          })
        );
      }
    } catch (error) {
      this.error = true;
      console.error('obs', error);
    }
  }
  showCharacterDetails(id: number) {
    this.router.navigate(['/character-details/' + id]);
  }
}
