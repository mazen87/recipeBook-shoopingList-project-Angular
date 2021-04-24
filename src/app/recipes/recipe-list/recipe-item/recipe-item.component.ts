import { Component, OnInit ,Output,EventEmitter, Input} from '@angular/core';
import { Recipe } from '../../recipe.module';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() selectRecipeEvent  = new EventEmitter <void> ();

  @Input() recipe :Recipe;
  clickedRecipe () {
    this.selectRecipeEvent.emit();
}

  constructor() { }

  ngOnInit(): void {
  }

}
