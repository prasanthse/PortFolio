import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectClass } from 'src/app/Classes/project-class';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  private projectDetail = new BehaviorSubject(new ProjectClass());
  currentProjectDetail = this.projectDetail.asObservable();

  setProjectDetailsForModal(details: ProjectClass) {
    this.projectDetail.next(details);
  }

}
