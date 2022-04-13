import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(key: any, ...args: any[]): any {

    if (args.length > 0) {
      console.log(this.removeInterPoll(this.translate.data[key], args),'after');
      return this.removeInterPoll(this.translate.data[key], args) || key;
    } else {
      debugger
      return this.translate.data[key] || key;
    }
  }


  public removeInterPoll(keyValue: any, args: any): any {
    let replacedData:any;
    args.forEach((ele, index) => {
      let value = index > 0? replacedData: keyValue;
      Object.keys(ele).forEach((objKey) => {
        let keyName = `{{${objKey}}}`;
        replacedData = value.replace(
          new RegExp(keyName, 'g'),
          ele[objKey]
        );
        // console.log(keyName,ele[objKey],keyValue,'ele');
        console.log(replacedData, 'replacedData');

      });
    });
    return replacedData;
    // console.log(keyValue.replace(new RegExp(oldWord, "g"), " abc");)
    // console.log('args',keyValue,args)
  }
}
