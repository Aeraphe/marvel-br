import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() searchText:string | null = '';

  constructor() {}

  ngOnInit(): void {}

  onChangeHandler(evt: any) {
    this.onChange.emit(evt.target.value);
  }
}
