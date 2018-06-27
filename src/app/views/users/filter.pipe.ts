import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( users : any[], term: string ): any[] {
    if (!term ) { return users; }

    return users.filter(function (user){

        return user.user_name.toLowerCase().includes(term.toLowerCase());
    });

  }

}
