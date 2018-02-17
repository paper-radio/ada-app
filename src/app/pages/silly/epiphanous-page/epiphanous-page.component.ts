import { Component, OnInit } from '@angular/core';
import * as ROT from 'rot-js';
import * as _ from 'lodash';

class Game {
    /// The HTML Canvas object for the game.
    display: ROT.Display;
    engine: ROT.Engine;
    scheduler: ROT.Scheduler;
    map: Map;
    player: Player;

    constructor(player: Player) {
        this.player = player;
        this.display = new ROT.Display({
            fontSize: 19
        });
        this.map = new Map();
    }

    drawDisplay() {
        document
            .getElementById('game-container')
            .appendChild(this.display.getContainer());
        this.display.drawText(0, 0, 'This is the map');
    }

    drawMap() {
        this.map.draw(this.display);

        let startPosition = _.sample(this.map.freeCells);
        startPosition.symbol = '@';
        this.player.setPosition(startPosition);
        this.player.draw(this.display);
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
            const cell = new Cell(x, y, '#', '#A6E22E');
            this.freeCells.push(cell);
        }
    }

    _generateMap() {
        this.digger.create(this.diggerCallback.bind(this));
    }

    draw(display: ROT.Display) {
        _.map(this.freeCells, cell => {
            cell.draw(display);
        });
    }
}

class Cell {
    x: number;
    y: number;
    symbol: string;
    color: string;

    constructor(x: number, y: number, symbol: string, color: string) {
        this.x = x;
        this.y = y;
        this.symbol = symbol;
        this.color = color;
    }

    draw(display: ROT.Display) {
        display.draw(this.x, this.y, this.symbol, this.color);
    }
}

class Player {
    /// Players name
    name: string;
    /// Birthmonth
    birthMonth: string;
    /// Players Position
    cell: Cell;

    /// Hitpoints
    hp: number;
    /// Magic Points
    mp: number;

    constructor(name: string) {
        this.name = name;
    }

    setPosition(cell: Cell) {
        this.cell = cell;
    }

    draw(display: ROT.Display) {
        display.draw(this.cell.x, this.cell.y, this.cell.symbol);
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
