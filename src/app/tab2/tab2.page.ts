import { Component } from '@angular/core';
import { PetshopService } from '../petshop/petshop.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

private petshop:any;

  constructor(private petshopService: PetshopService) { 
    this.petshop = this.petshopService.getAll(); 
  }

  async ngOnInit() {
  
  }
 


}
