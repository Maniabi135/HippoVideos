import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ClientsComponent } from './clients/clients.component';
import { ReferBenifitComponent } from './refer-benifit/refer-benifit.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ProductFeaturesComponent } from './product-features/product-features.component';
import { EngageLeadComponent } from './engage-lead/engage-lead.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PricingOfferComponent } from './pricing-offer/pricing-offer.component';
import { ActOnComponent } from './act-on/act-on.component';
import { CopyRightComponent } from './copy-right/copy-right.component';
import { AboutProductComponent } from './about-product/about-product.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    TopBarComponent,
    ClientsComponent,
    ReferBenifitComponent,
    EnterpriseComponent,
    ProductFeaturesComponent,
    EngageLeadComponent,
    TestimonialsComponent,
    PricingOfferComponent,
    ActOnComponent,
    CopyRightComponent,
    AboutProductComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
