import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works updated!';
  videoGames = [
    { title: 'Super Mario 64' },
    { title: 'Resident Evil' }
  ];
}
