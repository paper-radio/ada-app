import { Component, OnInit } from '@angular/core';
import * as ROT from 'rot-js';

@Component({
    selector: 'app-epiphanous-page',
    templateUrl: './epiphanous-page.component.html',
    styleUrls: ['./epiphanous-page.component.css']
})
export class EpiphanousPageComponent implements OnInit {
    display: ROT.Display;

    constructor() {
        this.display = new ROT.Display();
    }

    ngOnInit() {
        document.body.appendChild(this.display.getContainer());
    }
}
