import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  folder = {};

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.onItemGet.subscribe((response) => {
      this.folder = response.item;
    });

  }
}
