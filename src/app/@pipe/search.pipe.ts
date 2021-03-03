import { Directive, ElementRef, EventEmitter, HostListener, Output, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(values: any[], filter: string): any {
    if (!values || !values.length) return [];
    if (!filter) return values;

    filter = filter.toUpperCase();

    if (filter && Array.isArray(values)) {
      const keys = Object.keys(values[0]);
      return values.filter(v => v && keys.some(k => v[k] && v[k].toString().toUpperCase().indexOf(filter) >= 0));
    }
  }

}




@Pipe({ name: 'sort' })

export class SortPipe implements PipeTransform {
  transform(items: [], direction: string, column: string, type: string) {
    let sortedItems = [];
    sortedItems = direction === "asc" ?
      this.sortAscending(items, column, type) :
      this.sortDescending(items, column, type);


    return sortedItems;
  }
  sortAscending(items:any, column:any, type:any) {

    return [...items.sort( (a: any, b: any):any => {
        if (type === 'string') {
          if (a[column] < b[column])
            return -1;
        }
        else {

          return a[column] - b[column];
        }
      })]
  }
  sortDescending(items:any, column:any, type:any) {
    return [...items.sort((a: any, b: any):any => {
        if (type === 'string') {
          if (a[column].toUpperCase() > b[column].toUpperCase())
            return -1;
        }
        else {
          return b[column] - a[column];
        }
      })]
  }
}


@Directive({selector: "[appSortParams]"})

export class SortParamsDirective {
@Output() param:EventEmitter<any>=new EventEmitter();
constructor(private element:ElementRef) { }

@HostListener('click') onClickIcon(){

if(this.element.nativeElement.getAttribute('dir')=="up"){
  this.param.emit({dir:"asc",col:this.element.nativeElement.id,typ:"number"})
}else{
  this.param.emit({dir:"desc",col:this.element.nativeElement.id,typ:"number"})
}

//this.selectSort(this.element.nativeElement.id)
}

selectSort(id:any){
switch(id){
case "firstAsc":
this.param.emit({dir:"asc",col:"first",typ:"string"})
break;
case "lastAsc":
this.param.emit({dir:"asc",col:"last",typ:"string"})
break;
case "ageAsc":
this.param.emit({dir:"asc",col:"AmountPaid",typ:"number"})
break;
case "emailAsc":
this.param.emit({dir:"asc",col:"email",typ:"string"})
break;
case "firstDesc":
this.param.emit({dir:"desc",col:"first",typ:"string"})
break;
case "lastDesc":
this.param.emit({dir:"desc",col:"last",typ:"string"})
break;
case "ageDesc":
this.param.emit({dir:"desc",col:"AmountPaid",typ:"number"})
break;
case "emailDesc":
this.param.emit({dir:"desc",col:"email",typ:"string"})
break;
}}}
