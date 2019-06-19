import { Component, OnInit } from '@angular/core';
import { Petshop } from '../petshop';
import { PetshopService } from '../petshop.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-promocao',
  templateUrl: './promocao.page.html',
  styleUrls: ['./promocao.page.scss'],
})
export class PromocaoPage implements OnInit {

  private petshop: Petshop;
  constructor(private promService: PetshopService,private alertController: AlertController ){ }

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

    this.promService.save(this.petshop)
    .then(res=>{
      this.presentAlert("Aviso", "Promoção Cadastrada!!!!");}, err=>{

        console.log("Deu Ruim" + err);
        this.presentAlert("Aviso", "Deu Ruim!!")
      }
      ).catch(
        erros=>{
          console.log("Erro ao conectar no sistema" + erros);
          
        }
      )
  }
}
