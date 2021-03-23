import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApifService } from './apif.service';
import { ArgComponent } from './arg/arg.component';
import { BraComponent } from './bra/bra.component';
import { ChiComponent } from './chi/chi.component';
import { ColComponent } from './col/col.component';
import { MexComponent } from './mex/mex.component';
import { UruComponent } from './uru/uru.component';
import { AleComponent } from './ale/ale.component';
import { EspComponent } from './esp/esp.component';
import { FraComponent } from './fra/fra.component';
import { IngComponent } from './ing/ing.component';
import { ItaComponent } from './ita/ita.component';
import { EeuuComponent } from './eeuu/eeuu.component';
import { ContComponent } from './cont/cont.component';
import { CustomDatePipe } from './custom.datepipe';
import { Custom2DatePipe } from './custom2.datepipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderbyPipe } from './orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArgComponent,
    BraComponent,
    ChiComponent,
    ColComponent,
    MexComponent,
    UruComponent,
    AleComponent,
    EspComponent,
    FraComponent,
    IngComponent,
    ItaComponent,
    EeuuComponent,
    ContComponent,
    CustomDatePipe,
    Custom2DatePipe,
    OrderbyPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [ApifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
