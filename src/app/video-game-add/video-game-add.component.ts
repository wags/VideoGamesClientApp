import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

class VideoGame {
  id: number;
  title: string;
  publishedOn: Date;
  platform: string;
}

@Component({
  selector: 'app-video-game-add',
  templateUrl: './video-game-add.component.html',
  styleUrls: ['./video-game-add.component.css']
})
export class VideoGameAddComponent implements OnInit {
  model: VideoGame;
  platforms: string[];

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.model = new VideoGame();

    this.platforms = [
      'Nintendo N64',
      'Nintendo GameCube',
      'Nintendo Wii',
      'Nintendo Wii U',
      'Nintendo Switch',
      'PlayStation',
      'PlayStation 2',
      'PlayStation 3',
      'PlayStation 4',
      'Xbox',
      'Xbox 360',
      'Xbox One'
    ];
  }

  onSubmit() {
    this.http.post('http://localhost:5000/api/videogames', this.model)
      .subscribe(() => {
        this.router.navigate(['/videogames']);
      });
  }

}
