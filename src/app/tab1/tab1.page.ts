import { Component } from '@angular/core';
import { PetshopService } from '../cadastros/petshop/petshop.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private petshop:any;

  constructor(private petshopService: PetshopService) { 
    this.petshop = this.petshopService.getAll(); 
  }

  async ngOnInit() {
  
  }
 


}



  

  