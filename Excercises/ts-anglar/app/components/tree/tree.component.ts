import { AppModule } from '../../app.module';
import { FsService } from '../../services/fs.service';

class TreeComponent {

    private folder: any;
    private showChildren: boolean;

    constructor(private $rootScope: ng.IScope, private fsService: FsService) {
        this.showChildren = false;
    }

    toggleChildren() {
        this.showChildren = !this.showChildren;
        this.fsService.setCurrentFolder(this.folder);
    }

    showContextMenu(event: any) {
        this.$rootScope.$broadcast('showContextMenu', { event: event, id: this.folder.id, type: this.folder.children ? 'folder' : 'file' });
    }
}

AppModule.component('tree', {
    templateUrl: 'app/components/tree/tree.template.html',
    controller: ['$rootScope', 'fsService', TreeComponent],
    bindings: {
        folder: '<',
    }
})