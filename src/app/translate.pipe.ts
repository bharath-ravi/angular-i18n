import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(key: any, ...args: any[]): any {
    console.log(args.length, 'args.length');
    if (args.length > 0) {
      console.log(this.removeInterPoll(this.translate.data[key], args));
      let data = this.removeInterPoll(this.translate.data[key], args);
      return this.removeInterPoll(this.translate.data[key], args) || key;
    } else {
      return this.translate.data[key] || key;
    }
    // console.log(data , 'hi');
  }
  removeInterPoll(keyValue: any, args: any): any {
    args.forEach((ele, index) => {
      Object.keys(ele).forEach((objKey) => {
        let keyName = `{{${objKey}}}`;
        let replacedData = keyValue.replace(new RegExp(keyName, 'g'), '');
        // console.log(keyName,ele[objKey],keyValue,'ele');
        console.log(replacedData);
        return replacedData;
      });
    });
    // console.log(keyValue.replace(new RegExp(oldWord, "g"), " abc");)
    // console.log('args',keyValue,args)
  }
}
