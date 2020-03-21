import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  file: File;
  file_name: string = null;
  constructor() {

  }

  fileChange(file) {
    this.file = file.target.files[0];
    this.file_name = this.file.name;
  }

}
