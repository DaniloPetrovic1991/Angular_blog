import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './history/history.component';

@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      FooterComponent,
      ArticleListComponent,
      AboutComponent,
      ArticleComponent,
      NotFoundComponent,
      HistoryComponent
   ],
   imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
     ],
     providers: [],
     bootstrap: [
        AppComponent
     ]
     })

export class AppModule { }
