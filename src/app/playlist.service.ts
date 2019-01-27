import { Injectable } from '@angular/core';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { ITrack } from './track';
@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private _url = '/assets/data/playlist.json';

  constructor(private http: HttpClient) { }
  getPlaylist(): Observable<ITrack[]> {
        return this.http.get<ITrack[]>(this._url)
                        .pipe(tap(data => alert(JSON.stringify(data))) , catchError(this.errorHandler));
       }
      errorHandler(error: HttpErrorResponse) {
        return observableThrowError(error.message || 'Server Error');
      }
}
