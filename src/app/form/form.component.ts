import { Component} from '@angular/core';
import {Food} from '../food';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

foods:Food = [{name:"Fish",descritption:"Nothing",calories:600},
{name:"Eggs",descritption:"Nothing",calories:500},
{name:"Ugali",descritption:"Nothing",calories:100}];


}
