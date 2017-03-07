import { AppModule } from '../app.module';

export class FsService {
    private root: any;
    constructor() {
        this.root = {
            id: 1, name: 'root', children: [
                {
                    id: 2, name: 'sub1', children: [
                        { id: 4, name: 'sub3', children: [] },
                        { id: 5, name: 'file1', content: 'text' },
                    ]
                },
                { id: 3, name: 'sub2', children: [] },
            ]
        }
    }

    getRoot() {
        return this.root;
    }
}

AppModule.service('fsService', FsService);