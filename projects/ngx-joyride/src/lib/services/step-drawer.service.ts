import {
    Injectable,
    ComponentRef,
    ApplicationRef,
    Injector,
    EmbeddedViewRef,
    createComponent
} from '@angular/core';
import { JoyrideStepComponent } from '../components';
import { JoyrideStep } from '../models';

@Injectable()
export class StepDrawerService {
    private refMap: { [key: string]: ComponentRef<JoyrideStepComponent> } = {};

    constructor(
        private appRef: ApplicationRef,
        private injector: Injector
    ) {}

    protected createStepComponent(): ComponentRef<JoyrideStepComponent> {
        return createComponent(JoyrideStepComponent, {
            environmentInjector: this.appRef.injector,
            elementInjector: this.injector,
        });
    }

    draw(step: JoyrideStep) {
        // 1. Create component using the Ivy API.
        const ref: ComponentRef<JoyrideStepComponent> = this.createStepComponent();

        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(ref.hostView);

        // 3. Get DOM element from component
        const domElem = (ref.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        // 4. Append DOM element to the body
        document.body.appendChild(domElem);

        const instance: JoyrideStepComponent = ref.instance;
        instance.step = step;
        ref.changeDetectorRef.detectChanges();
        step.stepInstance = instance;

        this.refMap[step.name] = ref;
    }

    remove(step: JoyrideStep) {
        this.appRef.detachView(this.refMap[step.name].hostView);
        this.refMap[step.name].destroy();
    }
}
