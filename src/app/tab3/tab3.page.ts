import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  file: File;
  file_name: string = null;
  constructor() {

  }

  fileChange(file) {
    this.file = file.target.files[0];
    this.file_name = this.file.name;
  }

}
