import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';

import { ChartPanelComponent } from './components/chart-panel/chart-panel.component';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';
import { FormComponent } from './components/form/form.component';
import { ProdutosService } from './service/products-service';


@NgModule({
  declarations: [
    AppComponent,
    ChartPanelComponent,
    TabMenuComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    TabMenuModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CheckboxModule,
    CalendarModule
  ],
  providers: [ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
