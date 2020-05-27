import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', () => {
      console.log('callback - particles.js config loaded');
    });
  }

}
