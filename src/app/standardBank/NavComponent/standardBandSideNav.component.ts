import {Component, Input, EventEmitter, Output, trigger, state, style, transition, animate } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataService} from '../../Data-Service';

@Component ({
    selector:'side-nav',
    templateUrl:`./standardBankSideNav.component.html`,
    styleUrls:['./standardBankSideNav.component.css'],
})

export class StandardBankSideNavComponent {
    @Input() showNav: Boolean;
    @Output() showNavChange = new EventEmitter();
    constructor(public dataService: DataService) {
    }

    toggleMenu(): void{
        this.showNavChange.emit(!this.showNav);
        this.dataService.hamburger=!this.showNav;
    }
}