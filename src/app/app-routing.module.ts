import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

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


const routes: Routes = [
{
  path: 'home',
  component: HomeComponent,
},

{
  path: 'arg',
  component: ArgComponent,
},

{
  path: 'bra',
  component: BraComponent,
},

{
  path: 'chi',
  component: ChiComponent,
},

{
  path: 'col',
  component: ColComponent,
},

{
  path: 'mex',
  component: MexComponent,
},

{
  path: 'uru',
  component: UruComponent,
},

{
  path: 'ale',
  component: AleComponent,
},

{
  path: 'esp',
  component: EspComponent,
},

{
  path: 'fra',
  component: FraComponent,
},

{
  path: 'ing',
  component: IngComponent,
},

{
  path: 'ita',
  component: ItaComponent,
},

{
  path: 'eeuu',
  component: EeuuComponent,
},

{
  path: 'cont',
  component: ContComponent,
},

{
  path:'',
  redirectTo: '/home',
  pathMatch: 'full'
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
