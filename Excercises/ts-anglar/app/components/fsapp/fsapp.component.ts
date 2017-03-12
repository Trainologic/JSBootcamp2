import { AppModule } from '../../app.module';
import { FsService } from '../../../app/services/fs.service'; FsService;

class FsAppComponent {
    private root: any;
    private currentFolder: any;
    constructor(private fsService: FsService, private $scope: ng.IScope) {
        this.fsService.subscribe(() => {
            this.currentFolder = this.fsService.getCurrentFolder();
            this.$scope.$applyAsync();
        });
        this.root = fsService.getRoot()
        this.currentFolder = fsService.getCurrentFolder();
    }
}

AppModule.component('fsApp', {
    templateUrl: 'app/components/fsapp/fsapp.template.html',
    controller: ['fsService', '$scope', FsAppComponent],
    bindings: {},
});

