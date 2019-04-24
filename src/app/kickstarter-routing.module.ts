import { DatatableComponent } from './datatable/datatable.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { GridlayoutComponent } from './shared/gridlayout/gridlayout.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { MockHttpComponent } from './mock-http/mock-http.component';

const routes: Routes = [
  { path: '', component: GridlayoutComponent, pathMatch: 'full' },
  { path: 'forms', component: FormComponent },
  { path: 'form-submit', component: FormDetailComponent },
  { path: 'mock-http', component: MockHttpComponent },
  { path: 'data-table', component: DatatableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class KickstarterRoutingModule { }
