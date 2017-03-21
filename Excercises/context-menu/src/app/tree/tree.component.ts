import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  test: string = 'test';

  constructor() { }

  ngOnInit() {
  }

}
