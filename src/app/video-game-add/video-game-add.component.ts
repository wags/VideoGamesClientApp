import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.model = new VideoGame();
  }

}
