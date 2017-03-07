import { AppModule } from '../../app.module';

class TreeComponent {

    private folder: any;
    private showChildren: boolean;

    constructor(private $rootScope: ng.IScope) {
        this.showChildren = false;
    }

    toggleChildren() {
        this.showChildren = !this.showChildren;
    }

    showContextMenu(event: any) {
        this.$rootScope.$broadcast('showContextMenu', { event: event, id: this.folder.id, type: this.folder.children ? 'folder' : 'file' });
    }
}

AppModule.component('tree', {
    templateUrl: 'app/components/tree/tree.template.html',
    controller: ['$rootScope', TreeComponent],
    bindings: {
        folder: '<'
    }
})