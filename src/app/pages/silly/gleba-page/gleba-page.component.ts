import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-gleba-page',
    templateUrl: './gleba-page.component.html',
    styleUrls: ['./gleba-page.component.css']
})
export class GlebaPageComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log('Hello');
    }

    /**
     * Simply sends a console log message.
     *
     * @memberof GlebaPageComponent
     */
    logToConsole() {
        console.log('The button was pressed');
    }

    addSVGTag() {
        console.log('being kicked');
        d3
            .select('#viz')
            .append('svg')
            .attr('width', 600)
            .attr('height', 600)
            .style('background', '#93A1A1');
    }

    changeColor() {
        d3.select('#viz svg').style('background', '#000');
    }

    addDot() {
        // Adds to the top left.
        d3
            .select('#viz svg')
            .append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', 10)
            .style('fill', '#FFF');
    }
}
