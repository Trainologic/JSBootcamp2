import {appModule} from "./app.module";

export class BoardComponent {
    time: Date;
    cells: any[];
    currentPlayer: string;

    constructor($interval) {
        this.currentPlayer = "X";

        this.cells = [
            {x:0, y:0, value: undefined},
            {x:1, y:0, value: undefined},
            {x:2, y:0, value: undefined},
        ];

        $interval(() => {
            this.time = new Date();
        }, 1000);
    }

    cellClicked(cell) {
        cell.value = this.currentPlayer;

        this.currentPlayer = (this.currentPlayer=="X" ? "O" : "X");
    }
}

appModule.component("board", {
    controller: BoardComponent,
    templateUrl: "app/board.html",
});
