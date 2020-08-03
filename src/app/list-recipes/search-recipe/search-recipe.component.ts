import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.scss']
})
export class SearchRecipeComponent implements OnInit {

  @Output() searchInput = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  inputChange(search: string) {
    this.searchInput.emit(search);
  }

}
