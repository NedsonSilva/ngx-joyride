import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'demo-app',
    template: `
        <div class="app-shell">
            <header class="toolbar">
                <div class="toolbar__brand">
                    <img src="assets/images/angular.png" alt="Angular" class="toolbar__logo" />
                    ngx-joyride
                </div>
                <nav class="toolbar__nav">
                    <a routerLink="">Home</a>
                    <a routerLink="/about/you">Page1</a>
                    <a routerLink="/info">Page2</a>
                </nav>
                <div class="toolbar__corner"></div>
            </header>
            <main class="content">
                <router-outlet></router-outlet>
            </main>
            <footer class="app-footer">© 2018 - Nicola Tommasi</footer>
        </div>
    `,
    styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
    constructor(private readonly translate: TranslateService) {}

    ngOnInit(): void {
        this.translate.setDefaultLang('en');
        this.translate.setTranslation('en', {
            TITLE: 'hello Nicola',
        });
    }
}
