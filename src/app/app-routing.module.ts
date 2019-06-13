import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'add-pessoa', loadChildren: './cadastros/pessoa/add-pessoa/add-pessoa.module#AddPessoaPageModule' },
  { path: 'add-animal', loadChildren: './cadastros/animal/add-animal/add-animal.module#AddAnimalPageModule' },
  { path: 'perfil-usuario', loadChildren: './perfil/perfil-usuario/perfil-usuario.module#PerfilUsuarioPageModule' },
  { path: 'perfil-animal', loadChildren: './perfil/perfil-animal/perfil-animal.module#PerfilAnimalPageModule' },
  { path: 'perfil-loja', loadChildren: './perfil/perfil-loja/perfil-loja.module#PerfilLojaPageModule' },
  { path: 'login-pessoa', loadChildren: './login/login-pessoa/login-pessoa.module#LoginPessoaPageModule' },
  { path: 'login-loja', loadChildren: './login/login-loja/login-loja.module#LoginLojaPageModule' },
  //{ path: 'add-pet', loadChildren: './petshop/add-pet/add-pet.module#AddPetPageModule' },
  //{ path: 'addLoja', loadChildren: './petshop/add-pet/add-pet.module#AddPetPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
