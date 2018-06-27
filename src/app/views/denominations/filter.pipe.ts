import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( denominations : any[], term: string ): any[] {
    if (!term ) { return denominations; }

    return denominations.filter(function (denomination){

        return denomination.name.toLowerCase().includes(term.toLowerCase());
    });

  }

}
