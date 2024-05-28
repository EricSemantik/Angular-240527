import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoState'
})
export class TodoStatePipe implements PipeTransform {

  transform(value: boolean, param1?: any): string {
    if(value) {
      return "Terminé"
    }

    return "Non terminé";

    
  }

}
