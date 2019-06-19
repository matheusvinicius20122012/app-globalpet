import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'add-petshop',
        children: [
          {
            path: '',
            loadChildren: '../cadastros/petshop/add-pet/add-pet.module#AddPetPageModule'
          }
        ]
      },
      {
        path: 'promocao',
        children: [
          {
            path: '',
            loadChildren: '../cadastros/petshop/promocao/promocao.module#PromocaoPageModule'
          }
        ]
      }, 
       {
        path: 'add-pessoa',
        children: [
          {
            path: '',
            loadChildren: '../cadastros/pessoa/add-pessoa/add-pessoa.module#AddPessoaPageModule'
          }
        ]
      },
      
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
