import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {registerLocaleData} from '@angular/common';
import pt from '@angular/common/locales/pt';

import {NZ_I18N, pt_BR} from 'ng-zorro-antd/i18n';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {ListComponent} from './pages/list/list.component';
import {DetailsComponent} from './pages/details/details.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {MovieStarsComponent} from './pages/components/movie-stars/movie-stars.component';
import {SearchComponent} from './pages/components/search/search.component';

import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzCarouselModule} from 'ng-zorro-antd/carousel';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzImageModule} from 'ng-zorro-antd/image';
import {NzBackTopModule} from 'ng-zorro-antd/back-top';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzFormModule} from 'ng-zorro-antd/form';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { OrderByPipe } from './pipe/order-by.pipe';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ListComponent,
    DetailsComponent,
    NotFoundComponent,
    MovieStarsComponent,
    SearchComponent,
    OrderByPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzIconModule,
    NzCardModule,
    FormsModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzCarouselModule,
    NzButtonModule,
    NzImageModule,
    NzBackTopModule,
    NzDividerModule,
    NzListModule,
    ReactiveFormsModule,
    NzFormModule,
    ScrollingModule
  ],
  providers: [{provide: NZ_I18N, useValue: pt_BR}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
