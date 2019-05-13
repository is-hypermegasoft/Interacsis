import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidenavDirective } from './navbar/sidenav.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';


@NgModule({
  declarations: [NavbarComponent, SidenavDirective, SearchbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent,SearchbarComponent ]

})
export class LayoutModule {}
