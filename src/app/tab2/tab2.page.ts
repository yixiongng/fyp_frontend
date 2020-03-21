import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  file: File;
  file_name: string = null;
  constructor() {

  }

  fileChange(file) {
    this.file = file.target.files[0];
    this.file_name = this.file.name;
  }

}
