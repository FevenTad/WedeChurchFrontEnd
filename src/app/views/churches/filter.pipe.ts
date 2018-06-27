import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( churches : any[], term: string ): any[] {
    if (!term ) { return churches; }

    return churches.filter(function (churche){

        return churche.church_name.toLowerCase().includes(term.toLowerCase());
    });

  }

}
