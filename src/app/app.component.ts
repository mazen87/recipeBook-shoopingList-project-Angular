import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipeBook-shoppingList-project';

  route : string = 'recipe'; 

  onNavigation(routeSelected :string){
    this.route= routeSelected;
  }
}
