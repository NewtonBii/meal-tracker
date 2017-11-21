import { Pipe, PipeTransform } from '@angular/core';
import {Food} from './food';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input: Food[]){
    return input.filter(function(food){
      return food.calories < 500;
    });
    
    // for (var i=0;i<input.length;i++)
    // {
    //   if(input[i].calories<500){
    //     output.unshift(input[i]);
    //   }
    // }
    // return output;
  }

}
