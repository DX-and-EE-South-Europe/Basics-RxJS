import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeOperatorsComponent } from './pages/operators/home-operators/home-operators.component';
import { OperatorsComponent } from './pages/operators/operators.component';
import { GeneratorContentComponent } from './pages/operators/generator-content/generator-content.component';
import SubpageGuard from './guards/subpage.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  /* { path: 'anatomy-observables', component: undefined },*/
  {
    path: 'operators',
    component: OperatorsComponent,
    canActivateChild: [SubpageGuard],
    children: [
      { path: '', component: HomeOperatorsComponent },
      {
        path: ':operatorPage',
        component: GeneratorContentComponent
      },
      { path: '**', redirectTo: '' }
    ]
  },
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
