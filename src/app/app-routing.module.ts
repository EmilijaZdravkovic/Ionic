import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  {
    path: 'add-new-donut',
    loadChildren: () => import('./add-new-donut/add-new-donut.module').then(m => m.AddNewDonutPageModule)
  },
  {
    path: 'edit-donut',
    loadChildren: () => import('./edit-donut/edit-donut.module').then(m => m.EditDonutPageModule)
  },
  {
    path: 'donut-info',
    loadChildren: () => import('./donut-info/donut-info.module').then(m => m.DonutInfoPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }