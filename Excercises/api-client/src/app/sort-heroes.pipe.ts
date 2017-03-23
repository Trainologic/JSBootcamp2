import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortHeroes'
})
export class SortHeroesPipe implements PipeTransform {

  transform(heroes: any, order?: any): any {
    var genders = [];
    var sortedHeroes = [];
    for (var hero of heroes) {
      genders[hero.gender] = genders[hero.gender] || [];
      genders[hero.gender].push(hero);
    }
    for (var i in genders) {
      var gender = genders[i];
      gender.sort((a, b) => {
        return a.name > b.name
      }
      );

      sortedHeroes = sortedHeroes.concat(gender);
    }


    return sortedHeroes;
  }

}
