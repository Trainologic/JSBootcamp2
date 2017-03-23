import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piped-content',
  templateUrl: './piped-content.component.html',
  styleUrls: ['./piped-content.component.scss']
})
export class PipedContentComponent implements OnInit {

  heroes = [
    {
      name: 'Superman',
      powers: ['Fly', 'Kryptonite'],
      gender: 'Male'
    },
    {
      name: 'Superwomen',
      powers: ['Fly', 'Diamond', 'Hot!'],
      gender: 'Female'
    },
    {
      name: 'Batman',
      powers: ['Technology', 'Finance'],
      gender: 'Male'
    },
    {
      name: 'Spiderman',
      powers: ['Web', 'SpiderSence'],
      gender: 'Male'
    },
    {
      name: 'Catwoman',
      powers: ['Spy', 'Technology'],
      gender: 'Female'
    },
    {
      name: 'Cheburashka',
      powers: ['Social', 'Soviet'],
      gender: 'Male'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
