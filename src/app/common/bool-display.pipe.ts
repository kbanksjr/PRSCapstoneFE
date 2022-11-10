import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(aBool: boolean, lang: string = "en"): string {
    if(lang === "fr"){
      return aBool ? "Oui" : "Non";
    }
    else
    return aBool ? "Yes" : "No";
  }
}
