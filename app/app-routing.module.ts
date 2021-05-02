import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {DetailsComponent} from './pages/details/details.component';
import {ListComponent} from './pages/list/list.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: 'welcome',
        component: ListComponent
      },
      {
        path: 'movie/:id',
        component: DetailsComponent
      },
      {
        path: 'notfound',
        component: NotFoundComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
