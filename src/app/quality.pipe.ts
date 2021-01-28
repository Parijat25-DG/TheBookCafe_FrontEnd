import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quality'
})
export class QualityPipe implements PipeTransform {

  transform(value: any, qName:string): any {
    console.log(value);
    console.log(qName);
    if(qName===""){
      return value;
    }
    const qualityArray:any[]=[];
    for(let i=0; i<value.length; i++){
      let qualityName:string=value[i].quality;
      if(qualityName.startsWith(qName)){
        qualityArray.push(value[i])
      }
    }
    return qualityArray;
  }

}
