import { Component } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testeauditivo';


msbapTitle = 'Audio Title';
msbapAudioUrl = 'Link to audio URL';

msbapDisplayTitle = false;
msbapDisplayVolumeControls = true;

msaapDisplayTitle = true;
msaapDisplayPlayList = true;
msaapPageSizeOptions = [2,4,6];

msaapDisplayVolumeControls = true;

// Material Style Advance Audio Player Playlist
playlist: Track[] = [
  {
    title: 'Audio One Title',
    link: '/../assets/audios/audios4/a1.mp3'
  },

  // {
  //   title: 'Audio Three Title',
  //   link: '/Testeauditivo/audios4/audios4/c1.mp3'
  // },
  // {
  //   title: 'Audio Two Title',
  //   link: '/Testeauditivo/audios4/audios4/o1.mp3'
  // },

];


}


