import { Component } from '@angular/core';
import { TrackData } from 'src/app/Models/track-data';
import { TrackInfo } from 'src/app/Models/track-info';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  title: string = 'Hello there this is test 😄';
  // property:className
  track: TrackInfo = new TrackInfo(
    'MEARN Track',
    'https://static.javatpoint.com/blog/images/mern-stack.png',
    ['Node Js', 'Angular', 'React Js']
  );
  // test interface
  trackInterface: TrackData = {
    trackName: 'MEARN Track in interface',
    trackNum: 45,
    courses: ['html', 'css', 'js'],
  };
}
