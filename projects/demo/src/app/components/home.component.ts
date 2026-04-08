import { Component } from '@angular/core';
import { JoyrideService } from 'ngx-joyride';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    constructor(private readonly joyrideService: JoyrideService) {}

    toggleAction() {}
    stepDone() {}
    onPrev() {}

    startTour() {
        const options = {
            steps: [
                'homeHeader@app',
                'featuresCard@app',
                'optionsCard@app',
                'step11@app',
                'scrollStep@app',
                'step1@about/you',
                'myStep2@app/routeB',
                'ciao',
                'home2@app',
                'stepHidden@app',
                'step3@app',
                'step2@about/you',
            ],
            // startWith: 'step3@app',
            // waitingTime: 3000,
            stepDefaultPosition: 'top',
            themeColor: '#345632',
            showPrevButton: true,
            logsEnabled: false,
        };
        this.joyrideService.startTour(options).subscribe();
    }
}
