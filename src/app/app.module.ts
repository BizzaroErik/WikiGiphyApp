import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HistoryComponent } from './history/history.component';
import { ApiSearchService } from './api-search.service';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GiphyListComponent } from './giphy-list/giphy-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    DashboardComponent,
    GiphyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [ApiSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
