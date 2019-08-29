import { Component } from '@angular/core';

import { BackEndService } from '../../../Service/back-end.service';
import { ProfileBody } from '../../../Classes/profile-body';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {

  selectedProfile = null;
  urlProfileDP = "/ProfileHeader/upload";
  errorMessage = "";

  profileBody = new ProfileBody;

  constructor(private backend: BackEndService){}

  FileSelected(event){
    this.selectedProfile = event.target.files[0];
  }

  GalleryFileSelected(event, count){
    
  }

  upload(){
    const fd = new FormData();
    fd.append('image', this.selectedProfile, this.selectedProfile.name);

    this.backend.postRequest(this.urlProfileDP, fd).subscribe(message => {
      console.log(message);
    }, error => this.errorMessage = error);
  }

  uploadProfileBody(test){
    console.log("text: ");
  }
}
