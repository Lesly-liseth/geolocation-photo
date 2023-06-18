import { Component, OnInit, OnDestroy } from '@angular/core';

import { PhotoService } from '../services/photo.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit,OnDestroy {

  constructor(public photoService: PhotoService) { }

  async ngOnInit() {
    console.log('New foto init');
  }

  ngOnDestroy(): void {
    console.log('New foto destrooy');
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
