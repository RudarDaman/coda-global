import {Routes} from '@angular/router';
import {ListRecipesComponent} from './list-recipes/list-recipes.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';

export const routes: Routes = [
  {
    path: 'list-recipes',
    component: ListRecipesComponent
  },
  {
    path: 'list-recipes/:id',
    component: RecipeDetailsComponent
  },
  {
    path: '',
    redirectTo: 'list-recipes',
    pathMatch: 'full'
  }
];
