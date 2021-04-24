import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  
  
  recipe :Recipe;
  
  afficherDetailEvent (data:Recipe){
    this.recipe = data;
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
