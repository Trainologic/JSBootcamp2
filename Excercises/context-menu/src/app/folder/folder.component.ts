import { Component, OnInit, Input } from '@angular/core';
import { ContextMenuService } from '../context-menu.service';

@Component({
  selector: 'folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
})
export class FolderComponent implements OnInit {

  test: string = '';

  @Input() name: string;

  constructor(private contextMenuSevice: ContextMenuService) {

  }

  ngOnInit() { }

  newFolder() {
    this.test = 'roman';
  }

  delete() {

  }

  contextMenuEventHandler(event) {
    let menu =
      {
        event: event,
        items: [
          { name: 'new folder ' + this.name, callback: () => this.newFolder() },
          { name: 'delete ' + this.name, callback: () => this.delete() }
        ]
      }

    this.contextMenuSevice.select(menu);
    return false;
  }

}
