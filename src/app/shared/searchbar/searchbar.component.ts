import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();
  
  searchText =  ""


  constructor() {}


  ngOnInit(): void {}

  onChangeHandler(evt:any){
   
    this.onChange.emit(evt.target.value)
  }


}
