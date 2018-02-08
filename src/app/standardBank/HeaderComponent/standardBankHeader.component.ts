import {Component} from '@angular/core';
import { DataService } from '../../Data-Service';

@Component({
    selector:'StandardBankHeader',
    templateUrl:`./standardBankHeader.component.html`,
    styleUrls:['./standardBankHeader.component.css']
})

export class StandardBankHeaderComponent {
  show : boolean = false;

  constructor(public dataService:DataService){
    
  }
    
  toggleMenu(): void{
      this.show=!this.show;
      this.dataService.hamburger=this.show;
  }
}