import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [

    new Recipe('Test recipe1', 'first recipe1',
    'https://www.kuechengoetter.de/uploads/media/960x960/09/24729-hamburger-zum-selber-bauen.jpg?v=1-0'),
    new Recipe('Test recipe2', 'second recipe',
    'https://www.kuechengoetter.de/uploads/media/960x960/09/24729-hamburger-zum-selber-bauen.jpg?v=1-0'),
    new Recipe('Test recipe3', 'third recipe',
    'https://www.kuechengoetter.de/uploads/media/960x960/09/24729-hamburger-zum-selber-bauen.jpg?v=1-0')
  ];
  constructor() { }

  ngOnInit() {
  }

}
