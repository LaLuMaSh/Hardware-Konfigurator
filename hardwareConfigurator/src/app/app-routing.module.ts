import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: 'platform', component: PlatformComponent },
  { path: 'cpu', component: CpuComponent },
  { path: 'mainboard', component: MainboardComponent },
  { path: 'gpu', component: GpuComponent },
  { path: 'ram', component: RamComponent },
  { path: 'storage', component: StorageComponent },
  { path: 'cooling', component: CoolingComponent },
  { path: 'psu', component: PsuComponent },
  { path: 'case', component: CaseComponent },
  { path: 'decoration', component: DecorationComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '**', component: PlatformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
