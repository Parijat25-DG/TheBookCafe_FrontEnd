import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clubGenre'
})
export class ClubGenrePipe implements PipeTransform {

  transform(value: any, gName:string): any {
    console.log(value);
    console.log(gName);
    if(gName===""){
      return value;
    }
    const genreArray:any[]=[];
    for(let i=0; i<value.length; i++){
      let genreName:string=value[i].bookGenre;
      if(genreName.startsWith(gName)){
        genreArray.push(value[i])
      }
    }
    return genreArray;
  }

}
