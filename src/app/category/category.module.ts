import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopsComponent } from './laptops/laptops.component';
import { PcComponent } from './pc/pc.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { PerifericosComponent } from './perifericos/perifericos.component';
import { GamerComponent } from './gamer/gamer.component';

@NgModule({
  declarations: [LaptopsComponent, PcComponent, AccesoriosComponent, PerifericosComponent, GamerComponent],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }
