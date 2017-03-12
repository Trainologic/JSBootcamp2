import { AppModule } from '../../app.module';

class ContentComponent {

    private folder: any;
    private test: number;

    constructor(private $rootScope: ng.IScope) {

    }

    showContextMenu(event: any, child: any) {
        child = child || this.folder;
        this.$rootScope.$broadcast('showContextMenu', { event: event, id: child.id, type: child.children ? 'folder' : 'file' });
    }
}

AppModule.component('content', {
    templateUrl: 'app/components/content/content.template.html',
    controller: ['$rootScope', ContentComponent],
    bindings: {
        folder: '<'
    }
})