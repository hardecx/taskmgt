import { ApiService } from './../../@service/api.service';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  PipeTransform,
} from "@angular/core";
import { Router } from '@angular/router';
import { faArrowDown, faArrowUp, faHome } from '@fortawesome/free-solid-svg-icons';
import { APIENUM } from 'src/app/@service/api.type';
import { ColumnSetting } from 'src/app/models/layout.model';
declare var $: any;

//import { ColumnSetting } from "src/app/@base/layout.model";

@Component({
  selector: "tsktable",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TableComponent implements OnChanges {
  @HostBinding("attr.class") class = "col-md-9 ml-sm-auto col-lg-10 pt-3 px-4";
  @Input() records: any[] = [];
  @Input() api: string = '';
  @Input() taskType: string = '';
  @Input() name: string = '';
  @Input() caption: string = '';
  @Input() hover: string = '';
  @Input() error: string = '';
  @Input() func: APIENUM = "";
  @Input() loading: boolean = false;
  @Input() sn: boolean = false;
  @Input() pending: boolean = false;
  @Input() tableShow: boolean = true;
  @Input() dateShow: boolean = true;
  @Input() routePage: string = '';
  @Input() settings: ColumnSetting[] = [];
  @Input() searchText: string = '';
  @Input() slash: string = '';
  columnMaps: ColumnSetting[] = [];
  keys: string[] = [];

  routerId: any = '';
  arrowUp = faArrowUp;
  arrowDown = faArrowDown;
  direction: string = "asc";
  column: string = "first";
  type: string = "string";

  fshow:boolean=false;

  page = 1;
  pageSize = 2;
  collectionSize = this.records.length;
  endDate: any=null;
  startDate: any=null;

  constructor(private router: Router,private apis:ApiService) {
    //this.refreshtable();
  }
  setSortParams(param: any) {

    this.fshow=!this.fshow;


    this.direction = param.dir;
    this.column = param.col;
    this.type = param.typ;
  }

  ngOnChanges() {


    this.routerId = this.settings.findIndex(x => x.routerParams == true);
    //this.settings.find(x=>x.routerParams==true);

    if (this.settings) {
      // when settings provided
      this.columnMaps = this.settings;
    } else {
      // no settings, create column maps with defaults
      this.columnMaps = Object.keys(this.records[0]).map((key) => {
        return {
          primaryKey: key,
          header:
            key.slice(0, 1).toUpperCase() + key.replace(/_/g, " ").slice(1),
        };
      });
    }

  }
  receiveMessage($event: any) {
    this.searchText = $event;
  }

  ngAfterContentChecked() { }

  refreshtable() {
    this.records = this.records
      .map((country, i) => ({ id: i + 1, ...country }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  search(v1:any,v2:any,v3:any,v4:any,v5:any){
    this.router.navigate(['main/'+v1,v2,v3,v4,v5])
  }

   filterabyDate(event:any,value:any){
     console.log(value);

    if(value=='e'){
      this.endDate=event.target.value;
    }
    if(value=='s'){
      this.startDate=event.target.value;
    }
    console.log(this.endDate,this.startDate);
    if(this.endDate!=null && this.startDate!=null){
      this.apis.special(this.api, {'StartDate':this.startDate,  "TaskType": this.taskType,'EndDate':this.endDate}, this.slash).subscribe((res:any)=>{
        console.log(res);
       
        this.records=res.records;
       },(err:any)=>{
         this.records=[];  
       })
       
    }


   }


}
