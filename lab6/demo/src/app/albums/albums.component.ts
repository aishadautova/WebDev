import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { ALBUMS } from './fake-mod';
import { Album } from './model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];
  newAlbum: string;
  loaded: boolean;

  constructor(private albumsService: AlbumsService) {
    this.albums = ALBUMS;
    this.newAlbum = '';
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) =>{
      this.albums = albums;
      this.loaded = true;
    });
  }

  add(){
    const album = {
      title: this.newAlbum
    };
    this.loaded = false;
    this.albumsService.add(album as Album).subscribe((album) => {
      console.log(album);
      this.albums.unshift(album);
      this.newAlbum = '';
      this.loaded = true;
    });
  }

  delete(id:number){
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumsService.delete(id).subscribe(() =>{
      console.log('deleted', id);
    });
  }
}
