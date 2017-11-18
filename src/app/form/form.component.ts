import { Component} from '@angular/core';
import {Food} from '../food';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
foods:Food[]=[{name:'Fries',descritption:'Nothing else',calories:600},
{name:'Fries',descritption:'Nothing else',calories:600}]



}
