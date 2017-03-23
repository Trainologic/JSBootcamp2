import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { FolderComponent } from './folder/folder.component';
import { PipedContentComponent } from './piped-content/piped-content.component';
import { MyNewPipePipe } from './my-new-pipe.pipe';
import { SortHeroesPipe } from './sort-heroes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    FolderComponent,
    PipedContentComponent,
    MyNewPipePipe,
    SortHeroesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
