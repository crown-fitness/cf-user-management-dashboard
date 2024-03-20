import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string) {
    if(searchText === ""){
      return items 
    }
    return items.filter((value:any)=>{
      if(value.first_name.trim().toLowerCase().includes(searchText.toLowerCase())){
        return value
      }
    });
  }

}
