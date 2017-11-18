import { Component} from '@angular/core';
import {FoodList} from '../food-list';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  newFood=FoodList;

}
