import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-teste';
  linkAtivo = 'dashboard';

  definirLinkAtivo(link: string) {
    this.linkAtivo = link;
  }

}
