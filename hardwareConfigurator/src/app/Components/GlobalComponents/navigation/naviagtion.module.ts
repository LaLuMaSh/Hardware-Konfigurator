import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavigationComponent } from './navigation.component';
import { AppRoutingModule } from '../../../app-routing.module';

@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  providers: [],
  exports: [ NavigationComponent ]
})
export class NaviagtionModule {
}
