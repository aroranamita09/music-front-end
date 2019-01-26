import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { UpdateCommentsComponent } from './playlist/update-comments/update-comments.component';
import { DeleteAllComponent } from './playlist/delete-all/delete-all.component';
import { DisplayAllTracksComponent } from './display-all-tracks/display-all-tracks.component';
import { SearchTrackByNameComponent } from './search-track-by-name/search-track-by-name.component';
import { GetFromLastFmService } from './get-from-last-fm.service';
import { PostToMongoService } from './post-to-mongo.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    CardsComponent,
    UpdateCommentsComponent,
    DeleteAllComponent,
    DisplayAllTracksComponent,
    SearchTrackByNameComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetFromLastFmService, PostToMongoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
