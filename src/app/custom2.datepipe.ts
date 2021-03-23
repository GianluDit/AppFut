import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'custom2Date'
})
export class Custom2DatePipe extends 
                DatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
    return super.transform(value, "d/M");
    }
}