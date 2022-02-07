import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent,
    
    
  ],
  imports: [CommonModule, RouterModule,SharedModule],
})
export class DefaultModule {}
