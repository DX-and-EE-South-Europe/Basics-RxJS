import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { OperatorsComponent } from './pages/operators/operators.component';
import { LinkComponent } from './components/link/link.component';
import { DynamicNavComponent } from './components/dynamic-nav/dynamic-nav.component';
import { VisualDemoComponent } from './components/visual-demo/visual-demo.component';
import { HomeOperatorsComponent } from './pages/operators/home-operators/home-operators.component';
import { GeneratorContentComponent } from './pages/operators/generator-content/generator-content.component';
import { ParentVisualDemoComponent } from './components/parent-visual-demo/parent-visual-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OperatorsComponent,
    LinkComponent,
    DynamicNavComponent,
    VisualDemoComponent,
    HomeOperatorsComponent,
    GeneratorContentComponent,
    ParentVisualDemoComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
