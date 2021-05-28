import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
// import { AppModule as StudyAppModule } from './../../node_modules/ng-study/src/app/app.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiplexCustomizeRouteReuseStrategyService } from './serves/multiplex-customize-route-reuse-strategy.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StudyAppModule
  ],
  providers: [    {
    provide: RouteReuseStrategy,
    useClass: MultiplexCustomizeRouteReuseStrategyService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

