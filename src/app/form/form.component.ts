import { Component} from '@angular/core';
import {FoodList} from '../food-list';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
display="Your List";

newFood:Food[]=[];

  onAdd(newName){
    if (this.newFood){
      this.newFood.push(newName.value);
    }
  }
  addFood(newName){
    this.newFood.unshift(newName);
  }
}


export class Food {
  constructor(
  public name:string,
  public descritption:string,
  public calories:number
){}

}
