import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  {path: '', redirectTo : '/playlist', pathMatch: 'full'},
  {path: 'playlist', component: PlaylistComponent},
{path: 'wishlist', component: WishlistComponent},
{path: '**' , component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [PlaylistComponent, WishlistComponent, PageNotFoundComponent];
