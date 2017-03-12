import * as angular from 'angular';
import { AppModule } from './app/app.module';
import './app/components/fsapp/fsapp.component';
import './app/components/tree/tree.component';
import './app/components/content/content.component';
import './app/components/contextmenu/contextmenu.component';
import './app/directives/rightclick.directive';

angular.bootstrap(document, [AppModule.name]);
