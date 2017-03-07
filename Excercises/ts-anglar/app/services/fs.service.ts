import { AppModule } from '../app.module';

export class FsService {

    private root: any;
    private currentFolder: any;
    private callbacks: any[];

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

        this.currentFolder = this.root;
    }

    subscribe(callback: any) {
        this.callbacks = this.callbacks || [];
        this.callbacks.push(callback);
    }

    fireCallbacks() {
        for (var callback of this.callbacks) {
            callback();
        }
    }

    getRoot() {
        return this.root;
    }

    getCurrentFolder() {
        return this.currentFolder;
    }

    setCurrentFolder(folder: any) {
        this.currentFolder = folder;
        this.fireCallbacks();
    }
}

AppModule.service('fsService', FsService);