import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {

  private number: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.subscribe((store) => {
      this.number = store.number;
    });
  }

  numberChanged() {
    this.dataService.dispatch({})
  }

}
