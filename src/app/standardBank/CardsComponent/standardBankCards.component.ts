import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Data-Service';

@Component({
    selector: 'card-details',
    templateUrl: `./standardBankcards.component.html`,
    styleUrls: ['./standardBankcards.component.css']
})
export class StandardBankCardComponent implements OnInit {
    jsonData: Array<Object>;
    errorMessage: any;

    constructor(public dataService: DataService) {

    }

    ngOnInit(): void {
        this.dataService.getBigCardData()
            .subscribe(
            (data) => {
                this.jsonData = data;

            }
            , (error) => {
                this.errorMessage = error;
            }
        )
    }
}