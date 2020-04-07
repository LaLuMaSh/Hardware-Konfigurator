import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlatformComponent } from './Components/LocalComponents/platform/platform.component';
import { CpuComponent } from './Components/LocalComponents/cpu/cpu.component';
import { MainboardComponent } from './Components/LocalComponents/mainboard/mainboard.component';
import { GpuComponent } from './Components/LocalComponents/gpu/gpu.component';
import { RamComponent } from './Components/LocalComponents/ram/ram.component';
import { StorageComponent } from './Components/LocalComponents/storage/storage.component';
import { CoolingComponent } from './Components/LocalComponents/cooling/cooling.component';
import { PsuComponent } from './Components/LocalComponents/psu/psu.component';
import { CaseComponent } from './Components/LocalComponents/case/case.component';
import { DecorationComponent } from './Components/LocalComponents/decoration/decoration.component';
import { SummaryComponent } from './Components/LocalComponents/summary/summary.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NaviagtionModule } from './Components/GlobalComponents/navigation/naviagtion.module';

@NgModule({
  declarations: [
    AppComponent,
    PlatformComponent,
    CpuComponent,
    MainboardComponent,
    GpuComponent,
    RamComponent,
    StorageComponent,
    CoolingComponent,
    PsuComponent,
    CaseComponent,
    DecorationComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    NaviagtionModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
