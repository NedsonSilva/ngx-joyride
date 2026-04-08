import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JoyrideArrowComponent } from './components/arrow/arrow.component';
import { JoyrideButtonComponent } from './components/button/button.component';
import { JoyrideCloseButtonComponent } from './components/close-button/close-button.component';
import { JoyrideStepComponent } from './components/step/joyride-step.component';
import { JoyrideDirective } from './directives/joyride.directive';
import { DocumentService } from './services/document.service';
import { DomRefService } from './services/dom.service';
import { EventListenerService } from './services/event-listener.service';
import { JoyrideBackdropService } from './services/joyride-backdrop.service';
import { JoyrideOptionsService } from './services/joyride-options.service';
import { JoyrideStepService } from './services/joyride-step.service';
import { JoyrideStepsContainerService } from './services/joyride-steps-container.service';
import { JoyrideService } from './services/joyride.service';
import { LoggerService } from './services/logger.service';
import { StepDrawerService } from './services/step-drawer.service';
import { TemplatesService } from './services/templates.service';

export const routerModuleForChild: ModuleWithProviders<RouterModule> =
    RouterModule.forChild([]);

@NgModule({
    imports: [CommonModule, routerModuleForChild],
    declarations: [
        JoyrideDirective,
        JoyrideStepComponent,
        JoyrideArrowComponent,
        JoyrideButtonComponent,
        JoyrideCloseButtonComponent,
    ],
    exports: [JoyrideDirective],
})
export class JoyrideModule {
    static forRoot(): ModuleWithProviders<JoyrideModule> {
        return {
            ngModule: JoyrideModule,
            providers: [
                JoyrideService,
                JoyrideStepService,
                JoyrideStepsContainerService,
                JoyrideBackdropService,
                EventListenerService,
                DocumentService,
                JoyrideOptionsService,
                StepDrawerService,
                DomRefService,
                LoggerService,
                TemplatesService,
            ],
        };
    }
    static forChild(): ModuleWithProviders<JoyrideModule> {
        return {
            ngModule: JoyrideModule,
            providers: [],
        };
    }
}
