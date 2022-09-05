import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  usuario = ""
  constructor(private activatedRoute : ActivatedRoute) {
    this.usuario = this.activatedRoute.snapshot.paramMap.get('id')
  }
}
