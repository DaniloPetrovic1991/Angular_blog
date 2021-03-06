import { HistoryComponent } from './history/history.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticleListComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'home',
    component: AboutComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '',
    component: ArticleListComponent
  },
  {
    path: ':key',
    component: ArticleComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
