import { Component } from '@angular/core';

import { BackEndService } from '../../../Service/back-end.service';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {

  selectedProfile = null;
  urlProfileDP = "/ProfileHeader/upload";
  errorMessage = "";

  constructor(private backend: BackEndService){}

  FileSelected(event){
    this.selectedProfile = event.target.files[0];
  }

  upload(){
    const fd = new FormData();
    fd.append('image', this.selectedProfile, this.selectedProfile.name);

    this.backend.postRequest(this.urlProfileDP, fd).subscribe(message => {
      console.log(message);
    }, error => this.errorMessage = error);
  }
}
