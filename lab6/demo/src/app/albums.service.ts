import { Injectable } from '@angular/core';
import { ALBUMS } from './albums/fake-mod';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Album } from './albums/model';
import { Photo } from './albums/model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  
  base_url = 'https://jsonplaceholder.typicode.com';
  constructor(
    private client: HttpClient
  ) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.base_url}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.base_url}/albums/${id}`);
  }

  update(album: Album): Observable<Album>{
    return this.client.put<Album>(`${this.base_url}/albums/${album.id}`, album);
  }

  delete(id: number): Observable<any> {
    return this.client.delete(`${this.base_url}/albums/${id}`)
  }

  add(album: Album): Observable<Album>{
    return this.client.post<Album>(`${this.base_url}/albums`, album);
  }

  getPhotos(id:number):Observable<Photo[]>{
    return this.client.get<Photo[]>(`${this.base_url}/${id}/photos`);
  }
}
