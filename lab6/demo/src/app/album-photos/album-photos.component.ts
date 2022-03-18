import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album, Photo } from '../albums/model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  album: Album | undefined;
  photos: Photo[];
  loaded: boolean;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumsService,
    private location: Location,
  ) { 
    this.photos = [];
    this.loaded = false;
  }

  ngOnInit(): void {
    this.showPhoto();
  }

  showPhoto(){
    this.route.paramMap.subscribe(params=>{
      const id=+(params.get('id') || {} );
      //this.loaded=false;
      this.albumService.getPhotos(id).subscribe(photos=>{
        this.photos=photos;
        //this.loaded=true;
      })
    });
  }

  returnBack(){
    this.location.back();
  }

}
