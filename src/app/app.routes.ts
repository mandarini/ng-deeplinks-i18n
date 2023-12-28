import { Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

export const routes: Routes = [
  {
    path: 'one',
    component: OneComponent,
  },
  {
    path: 'two',
    component: TwoComponent,
    children: [
      {
        path: 'three',
        component: ThreeComponent,
      },
    ],
  },
];
