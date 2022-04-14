import { TestComponent } from './test/test.component';
import { AddShirtComponent } from './add-shirt/add-shirt.component';
import { ListShirtsComponent } from './list-shirts/list-shirts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/add'},
  { path: 'list-shirts', component: ListShirtsComponent},
  { path: 'add', component: AddShirtComponent},
  { path: 'test', component: TestComponent},
  { path: '**', component: ErrorPageComponent},
  // { path: 'list-shirts', loadChildren: () => import('./list-shirts/list-shirts.module').then(m => m.ListShirtsModule)},
  // { path: 'add', loadChildren: () => import('./add-shirt/add-shirt.module').then(m => m.AddShirtModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
