import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[] = [];

  ngOnInit(){
    this.items = [
      {
        label: "<b>Testy z użyciem Google Forms</b>",
        escape: false,
      },
      {
        label: "Wszystkie testy"
      },
      {
        label: "Dodaj nowy test"
      }
    ]
  }
}
