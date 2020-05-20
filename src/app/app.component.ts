import {Component, Input, ViewChild, OnInit} from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

import * as moment from 'moment';
import {StreamState} from './stream-state';
import {takeUntil} from 'rxjs/operators'; // add this 1 of 4

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
   state: StreamState = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTime: undefined,
    volume: 0.5,
    canplay: false,
    error: false,
  };
   stop$ = new Subject();
  audioEvents = [
    'ended',
    'error',
    'play',
    'playing',
    'pause',
    'timeupdate',
    'canplay',
    'loadedmetadata',
    'loadstart'
  ];

  currentTime = 0;
  duration = 0;
  title = 'Testeauditivo';
  audio = new Audio();

// Material Style Advance Audio Player Playlist
  playlist = [
    {
      name: 'Audio One Title',
      url: '/../assets/audios/audios4/a1.mp3'
    },

    {
      name: 'Audio Three Title',
      url: '/../assets/audios/audios4/c1.mp3'
    },
    {
      name: 'Audio Two Title',
      url: '/../assets/audios/audios4/a1.mp3'
    },

  ];

  constructor() {
    // listen to stream state
    this.getState()
      .subscribe(state => {
        this.state = state;
      });
  }
   stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(
    this.state
  );

  // ngOnInit(): void {
  //   this.playlist.forEach(a => {
  //     sleep()
  //     this.openFile(a.url);
  // });
  // }

  openFile(url: string) {
    this.playStream(url);
  }

  playStream(url) {
    return this.streamObservable(url).subscribe(e => {});
  }

  streamObservable(url) {
    return new Observable(observer => {
      // Play audio
      this.audio.src = url;
      this.audio.load();
      this.audio.play();

      const handler = (event: Event) => {
        this.updateStateEvents(event);
        observer.next(event);
      };
      //
      this.addEvents(this.audio, this.audioEvents, handler);
      return () => {
        // Stop Playing
        this.audio.pause();
        this.audio.currentTime = 0;
        // remove event listeners
        this.removeEvents(this.audio, this.audioEvents, handler);
        // reset state
        this.resetState();
      };
    });
  }

   updateStateEvents(event: Event): void {
    switch (event.type) {
      case 'canplay':
        this.state.duration = this.audio.duration;
        this.state.readableDuration = this.formatTime(this.state.duration);
        this.state.canplay = true;
        break;
      case 'playing':
        this.state.playing = true;
        break;
      case 'pause':
        this.state.playing = false;
        break;
      case 'timeupdate':
        this.state.currentTime = this.audio.currentTime;
        this.state.readableCurrentTime = this.formatTime(
          this.state.currentTime
        );
        break;
      case 'error':
        this.resetState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }

   resetState() {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      volume: 0.5,
      canplay: false,
      error: false
    };
  }

  getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }

   addEvents(obj, events, handler) {
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }

   removeEvents(obj, events, handler) {
    events.forEach(event => {
      obj.removeEventListener(event, handler);
    });
  }

  // playStream(url) {
  //   return this.streamObservable(url).pipe(takeUntil(this.stop$));
  // }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

   stop() {
      this.stop$.next();
    }

  seekTo(seconds) {
    this.audio.currentTime = seconds;
  }

  setVolume(volume) {
    this.audio.volume = volume;
  }

  formatTime(time: number, format: string = 'HH:mm:ss') {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }


}


