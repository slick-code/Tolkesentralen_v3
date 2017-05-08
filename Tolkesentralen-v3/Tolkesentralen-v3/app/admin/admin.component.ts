import { Component } from '@angular/core';
import { DataService } from '../_services/data.service'
import { NavbarElement, Counter } from '../_models/models'
import { AdminService } from '../_services/admin.service'

@Component({
  selector: 'admin',
  templateUrl: "./app/admin/admin.component.html",
  providers: [AdminService],
})

export class AdminComponent  {
    counter: Counter;
    sum: string;
    antallOppdrag: number;
    antallOversettelser: number;
    antallKunder: number;
    antallNyeKunder: number;

    element: NavbarElement;
    temp: any;

    constructor(private dataService: DataService, private adminService: AdminService ) {}

    ngOnInit() {
        this.getCount();
        
      
    }

    getUpdate() {
        this.dataService.getData().subscribe(data => {
            this.temp = data;
            this.element = this.temp;

            switch (this.element.element) {
                case 'oppdrag': this.counter.nyeoppdrag = this.element.nr; break;
                case 'oversettelse': this.antallOversettelser = this.element.nr; break;
                case 'nye-kunder': this.counter.nyekunder = this.element.nr; break;
            }
            this.sum = this.getSum();
        })
    }

    getCount() {
        this.adminService.getUbehandleOppdrag().subscribe(
            retur => {
                this.counter = retur;
                console.log("Count: " + this.counter.nyekunder);
                
            },
            error => console.log("Error get count - " + error),
            () => console.log("ferdig  get count")
        );

        this.getUpdate();
    }



    getSum(){
      var sum: number = 0;
      sum += this.counter.nyeoppdrag == null ? 0 : this.counter.nyeoppdrag;
      sum += this.antallOppdrag  == null ? 0 : this.antallOppdrag ; 
      sum += this.counter.nyekunder == null ? 0 : this.counter.nyekunder;
      return sum == 0 ? "" : "" + sum;
    }

 }