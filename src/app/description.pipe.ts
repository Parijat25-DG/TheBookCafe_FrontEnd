import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: any, dName:string): any {
    console.log(value);
    console.log(dName);
    if(dName===""){
      return value;
    }
    const descArray:any[]=[];
    for(let i=0; i<value.length; i++){
      let descName:string=value[i].description;
      if(descName.startsWith(dName)){
        descArray.push(value[i])
      }
    }
    return descArray;
  }

}
