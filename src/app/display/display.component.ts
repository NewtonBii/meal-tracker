import { Component} from '@angular/core';
import {Food} from '../food';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent{
  foods:Food = [{name:"Fish",descritption:"Nothing",calories:600},
  {name:"Eggs",descritption:"Nothing",calories:500},
  {name:"Ugali",descritption:"Nothing",calories:100}];
}
