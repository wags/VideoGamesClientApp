import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

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

  constructor(private http: Http) { }

  ngOnInit() {
    this.model = new VideoGame();
  }

  onSubmit() {
    this.http.post('http://localhost:5000/api/videogames', this.model)
      .subscribe(() => {
        console.log('Added video game!');
      });
  }

}
