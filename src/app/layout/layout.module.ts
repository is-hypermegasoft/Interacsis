import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidenavDirective } from './navbar/sidenav.directive';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [NavbarComponent, SidenavDirective],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent ]
})
export class LayoutModule {}
