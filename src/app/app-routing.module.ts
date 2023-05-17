import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartPanelComponent } from './components/chart-panel/chart-panel.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'registros',
    pathMatch: 'full'
  },
  {
    path: 'registros',
    pathMatch: 'full',
    component: ChartPanelComponent
  },
  {
    path: 'cadastro',
    pathMatch: 'full',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
