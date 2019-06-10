import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { BasicLayoutComponent } from './views/basic-layout/basic-layout.component';
import { BooksListComponent } from './views/basic-layout/books-list/books-list.component';
import { InfoBlockComponent } from './views/basic-layout/info-block/info-block.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  {
    path: 'get-started',
    component: BasicLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
      },
      {
        path: 'books',
        component: BooksListComponent
      },
      {
        path: 'info',
        component: InfoBlockComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
