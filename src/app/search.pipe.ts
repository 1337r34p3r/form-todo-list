import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})


export class SearchPipe implements PipeTransform {


  transform(value: any[], arg: String): any[] {
    if(!value || !arg){
      console.log(value)
      return value;
    }
    else if(arg){
      for(let count=0; count<value.length; count++){
        if(value[count].userName=== arg){
          return value[count];
        }
      }
    }
  }
}

