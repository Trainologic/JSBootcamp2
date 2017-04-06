import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {

  private number: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.subscribe((store) => {
      this.number = store.number;
    });
  }

}
