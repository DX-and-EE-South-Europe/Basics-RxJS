import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OperatorsComponent } from './pages/operators/operators.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  /* { path: 'anatomy-observables', component: undefined },*/
  { path: 'operators', component: OperatorsComponent },
  /*{ path: 'functions', component: undefined },
  { path: 'marble-testing', component: undefined },
  { path: 'practical-examples', component: undefined }, */
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
