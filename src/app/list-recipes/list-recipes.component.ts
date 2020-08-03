import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.scss']
})
export class ListRecipesComponent implements OnInit {

  recipeData;
  filteredRecipeData;
  searchValue;

  constructor() {
  }

  ngOnInit() {
    this.recipeData = JSON.parse(localStorage.getItem('recipes'));
    this.filteredRecipeData = this.recipeData;
  }

  onSearchChange(search) {
    this.searchValue = search;
    this.filteredRecipeData = this.getFilteredRecipeData(search);
  }

  getFilteredRecipeData(search: string) {
    return this.recipeData.filter(recipe => recipe.name.includes(search));
  }
}
