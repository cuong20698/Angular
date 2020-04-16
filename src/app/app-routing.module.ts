import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '', redirectTo: 'master', pathMatch : 'full'},
  {path: 'master', loadChildren: './pages/master/master.module#MasterModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
