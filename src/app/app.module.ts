import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiKitComponent } from './ui-kit/ui-kit.component';
import { ArticleComponent } from './components/ui/article/article.component';
import { BtnComponent } from './components/ui/btn/btn.component';
import { ModalComponent } from './components/ui/modal/modal.component';
import { MenuComponent } from './components/ui/menu/menu.component';
import { EverythingComponent } from './components/everything/everything.component';
import { HeadlinesComponent } from './components/headlines/headlines.component';
import { PaginationComponent } from './components/ui/pagination/pagination.component';
import { ImageComponent } from './components/ui/image/image.component';
import { InputComponent } from './components/ui/input/input.component';
import { SelectComponent } from './components/ui/select/select.component';
import { NewsComponent } from './components/news/news.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import {HttpClientModule} from "@angular/common/http";



const appRoutes: Routes = [

  {path: 'ui-kit', component: UiKitComponent},
  {path: 'headlines', component: HeadlinesComponent, children: [
      {path: ':id', component: EverythingComponent}
    ]},
  {path: 'everything', component: EverythingComponent, children: [
    {path: ':id', component: EverythingComponent}
  ]},
  {path: '**', redirectTo: '/everything/1'},
]

@NgModule({
  declarations: [
    AppComponent,
    UiKitComponent,
    ArticleComponent,
    BtnComponent,
    ModalComponent,
    MenuComponent,
    EverythingComponent,
    HeadlinesComponent,
    PaginationComponent,
    ImageComponent,
    InputComponent,
    SelectComponent,
    NewsComponent,
    SearchComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
