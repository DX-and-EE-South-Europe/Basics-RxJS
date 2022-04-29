import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LinkComponent } from './components/link/link.component';
import { DynamicNavComponent } from './components/dynamic-nav/dynamic-nav.component';
import { VisualDemoComponent } from './components/visual-demo/visual-demo.component';
import { HomeOperatorsComponent } from './pages/operators/home-operators/home-operators.component';
import { GeneratorContentDataPageComponent } from './pages/generator-content-data-page/generator-content-data-page.component';
import { ParentVisualDemoComponent } from './components/parent-visual-demo/parent-visual-demo.component';
import { JsonServerService } from './services/json-server.service';
import { BasePageSectionComponent } from './pages/base-page-section/base-page-section.component';
import { HomeFunctionsComponent } from './pages/functions/home-functions/home-functions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinkComponent,
    DynamicNavComponent,
    VisualDemoComponent,
    HomeOperatorsComponent,
    GeneratorContentDataPageComponent,
    ParentVisualDemoComponent,
    BasePageSectionComponent,
    HomeFunctionsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [JsonServerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
