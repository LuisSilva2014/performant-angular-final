import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public photos: { src: string, title: string, publicId: string }[] = [];
  constructor() { }

  ngOnInit(): void {
    this.photos = [{
      src: 'https://res.cloudinary.com/tamas-demo/image/upload/q_auto,dpr_auto,f_auto,w_250/web-perf/wp-1.jpg',
      publicId: '/web-perf/wp-1',
      title: 'Teams greet each other'
    }, {
      src: 'https://res.cloudinary.com/tamas-demo/image/upload/q_auto,dpr_auto,f_auto,w_250/web-perf/wp-2.jpg',
      publicId: '/web-perf/wp-2',
      title: 'Discussing the strategy'
    }, {
      src: 'https://res.cloudinary.com/tamas-demo/image/upload/q_auto,dpr_auto,f_auto,w_250/web-perf/wp-3.jpg',
      publicId: '/web-perf/wp-3',
      title: 'The first attack'
    }, {
      src: 'https://res.cloudinary.com/tamas-demo/image/upload/q_auto,dpr_auto,f_auto,w_250/web-perf/wp-4.jpg',
      publicId: '/web-perf/wp-4',
      title: 'A goalie\'s view'
    }, {
      src: 'https://res.cloudinary.com/tamas-demo/image/upload/q_100,f_auto,w_250/web-perf/wp-5.jpg',
      publicId: '/web-perf/wp-5',
      title: 'Wonderful supporters'
    }, {
      src: 'https://res.cloudinary.com/tamas-demo/image/upload/q_100,f_auto,w_250/web-perf/wp-6.jpg',
      publicId: '/web-perf/wp-6',
      title: 'Team introductions'
    }, {
      src: 'https://res.cloudinary.com/tamas-demo/image/upload/q_100,f_auto,w_250/web-perf/wp-7.jpg',
      publicId: '/web-perf/wp-7',
      title: 'Good, tactical attacking'
    }];
  }

}
