import { AppModule } from '../../app.module';
import { FsService } from '../../../app/services/fs.service'; FsService;

class FsAppComponent {
    private root: any;
    constructor(private fsService: FsService) {
        this.root = fsService.getRoot()
    }
}

AppModule.component('fsApp', {
    templateUrl: 'app/components/fsapp/fsapp.template.html',
    controller: ['fsService', FsAppComponent],
    bindings: {},
});

