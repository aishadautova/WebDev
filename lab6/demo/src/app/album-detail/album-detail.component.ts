import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ALBUMS } from '../albums/fake-mod';
import { Album, Photo } from '../albums/model';
import { Location } from '@angular/common';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album: Album | undefined;
  loaded: boolean | undefined;
  photos: Photo[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumsService: AlbumsService,
  ) { 
    this.photos = [];
  }

  ngOnInit(): void {

    // this.route.paramMap.subscribe((params) => {
    //   const id = parseInt(params.get('id') || '{}');
    //   this.album = ALBUMS.find((x) => x.id === id);
    // });

    this.getAlbum();

  }

  getAlbum(){
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') || '{}');
      // const id = params.get('id');
    
      this.loaded = false;

      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  update(){
    const album = this.album;
    this.loaded = false;
    this.albumsService.update(album as Album).subscribe((album) => {
      console.log(album);
      this.loaded = true;
    });
  }

  goBack(){
    this.location.back();
  }

}
