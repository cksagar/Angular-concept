import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FruitsComponent } from './fruits.component';
import { FruitsService } from './fruits.service';
import { RouterModule } from '@angular/router';
import { FruitsDetailComponent } from './fruits-detail.component';
import { FruitResolver } from './fruit-resolver.service';


@NgModule({
  declarations: [FruitsComponent, FruitsDetailComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: FruitsComponent },
      {
        path: ':id', component: FruitsDetailComponent,
        resolve: { resolvedData: FruitResolver }
      }
    ])
  ],

  providers: [FruitsService]
})
export class FruitsModule { }
