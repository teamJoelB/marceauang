import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemoComponent } from './memo/memo.component';


const routes: Routes = [
  {path: 'memo', component: MemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
