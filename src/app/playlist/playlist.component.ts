import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
    public Playlist = [];
    public errorMsg;
  constructor(private _playlistService: PlaylistService, private router: Router) { }
  ngOnInit() {
    this._playlistService.getPlaylist()
    .subscribe(data => this.Playlist = data,
               error => this.errorMsg = error);
  }
  onSelect(playlistDetails) {
    this.router.navigate(['/playlist', playlistDetails.id]);
  }

  }
