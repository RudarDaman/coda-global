import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routing';
import {ListRecipesComponent} from './list-recipes/list-recipes.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RecipeComponent} from './list-recipes/recipe/recipe.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchRecipeComponent } from './list-recipes/search-recipe/search-recipe.component';
import { HighlightPipe } from './pipe/highlight.pipe';
import { CircleDetailComponent } from './recipe-details/circle-detail/circle-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent,
    RecipeDetailsComponent,
    RecipeComponent,
    SearchRecipeComponent,
    HighlightPipe,
    CircleDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
