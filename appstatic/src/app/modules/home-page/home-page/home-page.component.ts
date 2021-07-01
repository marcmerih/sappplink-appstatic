import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  image: AngularFireStorageReference | undefined;

  constructor(private fireStorage: AngularFireStorage) { }

  ngOnInit(): void {
    this.image = this.fireStorage.ref('sapplink-v1.png');
  }

  private async getUrl(snap: firebase.storage.UploadTaskSnapshot) {
    const url = await snap.ref.getDownloadURL();
  }

}
