import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created ♥ in 2019</span>
    <div class="socials">
      <a href="https://github.com/prasanthse" target="_blank" class="ion ion-social-github"></a>
      <a href="https://twitter.com/prasanth15sp" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/in/prasanthse1996/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
