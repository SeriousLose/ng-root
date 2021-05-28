import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'aa',
    // loadChildren: () => import('./../../node_modules/ng-study/src/app/app.module').then((m: any) => m.AppMModule),
    loadChildren: '../../node_modules/ng-study/src/app/app.module#AppModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})], // 路由前带 # 号

  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
