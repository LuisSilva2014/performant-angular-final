import { Component, OnInit } from '@angular/core';

function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// console.log(`Just for fun: ${fibonacci(42)}`);

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  public fastConnection: boolean;
  constructor() {}

  ngOnInit(): void {
    if (
      navigator['connection'] &&
      navigator['connection'].effectiveType
    ) {
      switch (navigator['connection'].effectiveType) {
        case 'slow-2g':
        case '2g':
        case '3g':
          this.fastConnection = false;
          break;
        case '4g':
          this.fastConnection = true;
          break;
        default:
          this.fastConnection = true;
      }
    }
  }
}
