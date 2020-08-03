import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  circleDetails = [
    { count: 8, name: 'ingredients' },
    { count: 220, name: 'ingredients' },
    { count: 25, name: 'ingredients' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
