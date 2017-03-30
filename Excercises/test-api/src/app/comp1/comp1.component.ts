import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  folder = {};

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.onItemGet.subscribe((response) => {
      this.folder = response.item;
    });
  }

}
