import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu/:id',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path:'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'ropa',
    loadChildren: () => import('./ropa/ropa.module').then( m => m.RopaPageModule)
  },
  {
    path: 'accesorios',
    loadChildren: () => import('./accesorios/accesorios.module').then( m => m.AccesoriosPageModule)
  },
  {
    path: 'juguetes',
    loadChildren: () => import('./juguetes/juguetes.module').then( m => m.JuguetesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
