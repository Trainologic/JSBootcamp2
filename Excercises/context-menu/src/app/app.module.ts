import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { TreeComponent } from './tree/tree.component';
import { FolderComponent } from './folder/folder.component';

import { ContextMenuService } from './context-menu.service';

@NgModule({
  declarations: [
    AppComponent,
    ContextMenuComponent,
    TreeComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContextMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
