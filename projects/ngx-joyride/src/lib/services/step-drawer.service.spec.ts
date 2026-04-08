import { TestBed } from '@angular/core/testing';
import { StepDrawerService } from './step-drawer.service';
import { ApplicationRef } from '@angular/core';
import { JoyrideStep } from '../models/joyride-step.class';

class ApplicationRefFake {
    injector = {} as any;
    attachView: jasmine.Spy = jasmine.createSpy('attachView');
    detachView: jasmine.Spy = jasmine.createSpy('detachView');
}

describe('StepDrawerService', () => {
    let stepDrawerService: StepDrawerService;
    let appRef: ApplicationRefFake;
    let fakeComponentRef: any;

    beforeEach(() => {
        fakeComponentRef = {
            hostView: { rootNodes: [document.createElement('div')] },
            instance: { step: {} },
            changeDetectorRef: { detectChanges: jasmine.createSpy('detectChanges') },
            destroy: jasmine.createSpy('destroy'),
        };

        TestBed.configureTestingModule({
            providers: [
                StepDrawerService,
                { provide: ApplicationRef, useClass: ApplicationRefFake },
            ],
        });

        stepDrawerService = TestBed.inject(StepDrawerService);
        appRef = TestBed.inject(ApplicationRef) as unknown as ApplicationRefFake;
        spyOn<any>(stepDrawerService, 'createStepComponent').and.returnValue(fakeComponentRef);
    });

    it('should call applicationRef.attachView', () => {
        const step = new JoyrideStep();
        step.name = 'myStep';
        stepDrawerService.draw(step);

        expect(appRef.attachView).toHaveBeenCalledTimes(1);
    });

    it('should set step.stepInstance with the step instance', () => {
        const step = new JoyrideStep();
        step.name = 'myStep';
        stepDrawerService.draw(step);

        expect(step.stepInstance.step.name).toEqual('myStep');
    });

    it('should call applicationRef.detachView on remove', () => {
        const step = new JoyrideStep();
        step.name = 'myStep';
        stepDrawerService.draw(step);
        stepDrawerService.remove(step);

        expect(appRef.detachView).toHaveBeenCalledTimes(1);
        expect(fakeComponentRef.destroy).toHaveBeenCalledTimes(1);
    });
});