import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchTrackByNameComponent } from './search-track-by-name/search-track-by-name.component';
import { TrackDetailsComponent } from './track-details/track-details.component';
const routes: Routes = [
  {path: '', redirectTo : '/playlist', pathMatch: 'full'},
  {path: 'playlist', component: PlaylistComponent},
{path: 'wishlist', component: WishlistComponent},
{path: 'playlist/:id', component: TrackDetailsComponent},
{path: 'search', component: SearchTrackByNameComponent},
{path: '**' , component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [PlaylistComponent, WishlistComponent, PageNotFoundComponent, TrackDetailsComponent,
  SearchTrackByNameComponent];
