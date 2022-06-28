import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeOperatorsComponent } from './pages/operators/home-operators/home-operators.component';
import { GeneratorContentDataPageComponent } from './pages/generator-content-data-page/generator-content-data-page.component';
import SubpageGuard from './guards/subpage.guard';
import { navOperators } from 'src/app/common/const/operators/nav-operators';
import { BasePageSectionComponent } from './pages/base-page-section/base-page-section.component';
import { navFunctions } from './common/const/functions/nav-functions';
import { HomeFunctionsComponent } from './pages/functions/home-functions/home-functions.component';
import { navObservables } from './common/const/observables/nav-observables';
import { navMulticasted } from './common/const/multicasted-obs.ts/nav-multicasted';
import { HomeMulticastedObsComponent } from './pages/multicasted-obs/home-multicasted-obs/home-multicasted-obs.component';
import { HomeObservablesComponent } from './pages/observables/home-observables/home-observables.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'observables',
    component: BasePageSectionComponent,
    canActivateChild: [SubpageGuard],
    data: { navData: navObservables },
    children: [
      { path: '', component: HomeObservablesComponent },
      {
        path: ':observablePage',
        component: GeneratorContentDataPageComponent
      },
      { path: '**', redirectTo: '' }
    ]
  },
  {
    path: 'multicasted-observables',
    component: BasePageSectionComponent,
    data: { navData: navMulticasted },
    children: [
      { path: '', component: HomeMulticastedObsComponent },
      {
        path: ':multicastedPage',
        component: GeneratorContentDataPageComponent
      },
      { path: '**', redirectTo: '' }
    ]
  },
  {
    path: 'operators',
    component: BasePageSectionComponent,
    canActivateChild: [SubpageGuard],
    data: { navData: navOperators },
    children: [
      { path: '', component: HomeOperatorsComponent },
      {
        path: ':operatorPage',
        component: GeneratorContentDataPageComponent
      },
      { path: '**', redirectTo: '' }
    ]
  },
  {
    path: 'functions',
    component: BasePageSectionComponent,
    data: { navData: navFunctions },
    canActivateChild: [SubpageGuard],
    children: [
      { path: '', component: HomeFunctionsComponent },
      {
        path: ':functionPage',
        component: GeneratorContentDataPageComponent
      },
      { path: '**', redirectTo: '' }
    ]
  },
  /* { path: 'marble-testing', component: undefined },
  { path: 'practical-examples', component: undefined }, */
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
