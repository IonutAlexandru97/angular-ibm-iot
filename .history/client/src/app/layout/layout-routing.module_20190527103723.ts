import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
];

export const LayoutRouting.moduleRoutes = RouterModule.forChild(routes);
