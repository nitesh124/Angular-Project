import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GridlayoutComponent } from './shared/gridlayout/gridlayout.component';
import { FormComponent } from './form/form.component';
import { KickstarterRoutingModule } from './/kickstarter-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { InMemoryMockService } from './service/InMemoryMockService.service';
import { MockHttpComponent } from './mock-http/mock-http.component';
import { DatatableComponent } from './datatable/datatable.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GridlayoutComponent,
    FormComponent,
    FormDetailComponent,
    MockHttpComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    KickstarterRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryMockService, { dataEncapsulation: false }
    ),
    [AgGridModule.withComponents(null)]
  ],
  exports: [KickstarterRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
