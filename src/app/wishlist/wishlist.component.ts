import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public playlists = [];
  public errorMsg;
  constructor( private playlistService: PlaylistService ) {}

  ngOnInit() {

    this.playlistService.getPlaylist()
      .subscribe(data => this.playlists = data,
                error => this.errorMsg = error);
  }

}
