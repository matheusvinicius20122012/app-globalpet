import { Component, OnInit } from '@angular/core';
import { Petshop } from '../petshop';
import { PetshopService } from '../petshop.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.page.html',
  styleUrls: ['./add-pet.page.scss'],
})
export class AddPetPage implements OnInit {
private petshop: Petshop;
  constructor(private petService: PetshopService,private alertController: AlertController ){ }

  ngOnInit() {
    this.petshop = new Petshop;
  }


  async presentAlert(titulo:string, texto:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message:texto,
      buttons: ['OK']
    });

    await alert.present();
  }


  onSubmit(form){

    this.petService.save(this.petshop)
    .then(res=>{
      this.presentAlert("Aviso", "Loja Cadastrada!!!!");}, err=>{

        console.log("Deu Ruim" + err);
        this.presentAlert("Aviso", "Deu Ruim!!")
      }
      ).catch(
        erros=>{
          console.log("Erro ao conectar no sis" + erros);
          
        }
      )
  }

}
