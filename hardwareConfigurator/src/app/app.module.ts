import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MoveThroughProjectComponent } from './Components/Shared/move-through-project/move-through-project.component';
import { ContentCardComponent } from './Components/Shared/content-card/content-card.component';
import { ContentCardContainerComponent } from './Components/Shared/content-card-container/content-card-container.component';

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
        SummaryComponent,
        MoveThroughProjectComponent,
        ContentCardComponent,
        ContentCardContainerComponent,
    ],
  imports: [
    BrowserModule,
    NaviagtionModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    NgbModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
