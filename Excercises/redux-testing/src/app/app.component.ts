import { Component } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private dataService: DataService) { }

  plusOne() {
    this.dataService.dispatch({ type: 'PLUS_ONE' });
  }
}
