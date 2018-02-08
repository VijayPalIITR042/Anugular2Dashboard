import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../Data-Service';

@Component({
    selector: 'StandardBankContent',
    templateUrl: `./standardBankContent.component.html`,
    styleUrls: ['./standardBankContent.component.css']
})
export class StandardBankContentComponent {
    constructor(public dataService: DataService) {
    }

    shownav: boolean;
    Arr: Array<number>;
    num: number = 10;
}