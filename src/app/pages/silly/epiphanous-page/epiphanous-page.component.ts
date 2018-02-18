import { Component, OnInit } from '@angular/core';
import * as ROT from 'rot-js';
import * as _ from 'lodash';

class Game {
    /// The HTML Canvas object for the game.

    player: Player;

    constructor(player: Player) {
        // Create player
        this.player = player;

        // Create display
        this.display = new ROT.Display({
            fontSize: 22,
            bg: '#27822'
        });

        this.map = new Map();

        const scheduler = new ROT.Scheduler.Simple();
        scheduler.add(this.player, true);

        this.engine = new ROT.Engine(scheduler);

        this.engine.start();
    }

    _drawDisplay() {
        document
            .getElementById('game-container')
            .appendChild(this.display.getContainer());
        this.display.drawText(0, 0, 'This is the map');
    }

    _drawMap() {
        this.map.draw(this.display);

        let startPosition = _.sample(this.map.freeCells);
        startPosition.symbol = '@';
        this.player.setPosition(startPosition);
        this.player.draw(this.display);
    }

    init() {
        this._drawDisplay();

        this._drawMap();
    }

    /**
     * Everytime there is a change this draw method with be called.
     *
     * @memberof Game
     */
    draw() {}
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

    act() {
        this.engine.lock();

        window.addEventListener('keydown', this.handleEvent.bind(this));
    }

    handleEvent(event) {
        console.log('Event being hanndled');
        const code = event.keyCode;
        const keyMap = {};
        keyMap[38] = 0;
        keyMap[33] = 1;
        keyMap[39] = 2;
        keyMap[34] = 3;
        keyMap[40] = 4;
        keyMap[35] = 5;
        keyMap[37] = 6;
        keyMap[36] = 7;

        /* one of numpad directions? */
        if (!(code in keyMap)) {
            return;
        }

        /* is there a free space? */
        const dir = ROT.DIRS[8][keyMap[code]];
        const newCell = new Cell(
            this.cell.x + dir[0],
            this.cell.y + dir[1],
            '@',
            '#000'
        );

        this.cell = newCell;

        this.draw(this.display);

        window.removeEventListener('keydown', this);
        this.engine.unlock();
    }
}

@Component({
    selector: 'app-epiphanous-page',
    templateUrl: './epiphanous-page.component.html',
    styleUrls: ['./epiphanous-page.component.css']
})
export class EpiphanousPageComponent implements OnInit {
    game: Game;
    player: Player;
    display: ROT.Display;
    engine: ROT.Engine;
    scheduler: ROT.Scheduler;
    map: Map;

    constructor() {
        this.player = new Player('Jordan');
        this.game = new Game(this.player);
    }

    ngOnInit() {
        this.game.init();
    }
}
