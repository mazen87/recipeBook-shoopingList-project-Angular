import { Component, OnInit ,Output,ViewChild, EventEmitter, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingNameRef') ingredientName : ElementRef;
  @ViewChild('ingAmountRef') ingredientAmount : ElementRef;
  @Output() addIngEvent = new EventEmitter<Ingredient>()

  onAddIng () {
    const ingName = this.ingredientName.nativeElement.value;
    const ingAmount = this.ingredientAmount.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.addIngEvent.emit(newIngredient);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
