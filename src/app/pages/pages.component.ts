import { Component, OnInit } from '@angular/core';

declare function init_plugins(); // llamar cualquier script com jquery  que este fuera de angular

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugins();
  }

}
