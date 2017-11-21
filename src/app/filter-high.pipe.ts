import { Pipe, PipeTransform } from '@angular/core';
import {Food} from './food';

@Pipe({
  name: 'filterHigh'
})
export class FilterHighPipe implements PipeTransform {

  transform(input: Food[]){
    return input.filter(function(food){
      return food.calories > 500;
    });
}
}
