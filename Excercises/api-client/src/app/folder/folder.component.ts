import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
  providers: [ApiService]
})
export class FolderComponent implements OnInit {

  private folder: any;
  @Input() id?: string;
  private expaned: boolean = false;

  constructor(private apiService: ApiService) {
    this.folder = this.folder || { children: [] };
  }

  addNewFolder() {
    this.apiService.createItem(this.folder._id, 'folder', 'new folder').subscribe((response) => {
      if (!response.success) { console.log(response.message); return; }
      this.folder.children.push(response.item);
    });
  }

  ngOnInit() {
    this.apiService.getFolderById(this.id).subscribe((response) => {
      this.folder = response.item;
    }, (err) => {
      debugger;
    });
  }

}
