import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-shared-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  @Input() character: any;
  imageSrc: string = '';
  characterName = '';
  id:number =  0;

  @Output() onClick:EventEmitter<number> = new EventEmitter<number>()

  constructor() {}

  ngOnInit(): void {
    if (this.character) {
      this.id = this.character.id
      let thumbnail = { ...this.character.thumbnail };
      this.characterName = this.character.name;
      this.imageSrc = thumbnail.path + '.' + thumbnail.extension;
    }
  }

  onClickHandler(){
    this.onClick.emit(this.id)
  }
}
