import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layout/default/default.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    HttpClientModule,
    PagesModule,
  ],
  providers: [HttpClient,AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
