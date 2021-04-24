import { Component, OnInit,Output,EventEmitter} from '@angular/core';

import {Recipe} from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() onSelectItem =new EventEmitter <Recipe>();

  recipes : Recipe[] = [
    new Recipe('Test Recipe1','Recipe1 description ',
    'https://get.pxhere.com/photo/egg-dish-food-cuisine-ingredient-produce-menemen-recipe-comfort-food-brunch-meal-frittata-Queso-flameado-breakfast-side-dish-poached-egg-turkish-food-indian-cuisine-1620832.jpg')
    ,new Recipe('Test Recipe2','Recipe2 description ',
    'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg')
  
  ]; 

  onSelectRecipe(data:Recipe) {
    this.onSelectItem.emit(data);
   }

  constructor() { }

  ngOnInit(): void {
  }

}
