import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe :Recipe;

/*   onSelectRecipe (data :Recipe){
    this.recipe = data;
  } */

  constructor() { }

  ngOnInit(): void {
  }

}
