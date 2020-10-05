import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_EXTRA_OPTIONS, APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BeerModule } from './beer/beer.module';
import { BarModule } from './bar/bar.module';
import { BeerTypeModule } from './beer_type/beer-type.module';
import { PromotionModule } from './promotion/promotion.module';
import { PairingModule } from './pairing/pairing.module';
import { PayTypeModule } from './pay_type/pay-type.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),
    BeerModule,
    BarModule,
    BeerTypeModule,
    PromotionModule,
    PairingModule,
    PayTypeModule,
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
