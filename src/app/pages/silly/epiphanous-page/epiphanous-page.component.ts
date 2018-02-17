import { Component, OnInit } from '@angular/core';
import * as ROT from 'rot-js';
import * as _ from 'lodash';

class Game {
    display: ROT.Display;
    engine: ROT.Engine;
    scheduler: ROT.Scheduler;
    map: Map;
    player: Player;

    constructor(player: Player) {
        this.player = player;
        this.display = new ROT.Display();
        this.map = new Map();
    }

    drawDisplay() {
        document
            .getElementById('game-container')
            .appendChild(this.display.getContainer());
        this.display.drawText(0, 0, 'This is the map');
    }

    drawMap() {
        console.log(this.map);

        _.map(this.map.freeCells, cell => {
            this.display.draw(cell.x, cell.y, cell.symbol);
        });
    }
}

class Map {
    digger: ROT.Map.Digger;
    freeCells: Array<Cell>;

    constructor() {
        this.digger = new ROT.Map.Digger();
        this.freeCells = new Array();
        this._generateMap();
    }

    diggerCallback(x, y, value) {
        if (value) {
            return;
        } else {
            const cell = new Cell(x, y, '#');
            this.freeCells.push(cell);
        }
    }

    _generateMap() {
        this.digger.create(this.diggerCallback.bind(this));
    }
}

class Cell {
    x: number;
    y: number;
    symbol: string;
    color: string;

    constructor(x: number, y: number, symbol: string) {
        this.x = x;
        this.y = y;
        this.symbol = symbol;
    }
}

class Player {
    name: string;

    x: number;
    y: number;

    hp: number;
    mp: number;

    constructor(name: string) {
        this.name = name;
    }
}

@Component({
    selector: 'app-epiphanous-page',
    templateUrl: './epiphanous-page.component.html',
    styleUrls: ['./epiphanous-page.component.css']
})
export class EpiphanousPageComponent implements OnInit {
    player: Player;
    game: Game;

    constructor() {
        this.player = new Player('Jordan');
        this.game = new Game(this.player);
    }

    ngOnInit() {
        this.game.drawDisplay();
        this.game.drawMap();
    }
}
