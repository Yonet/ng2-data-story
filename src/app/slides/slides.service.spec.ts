/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SlidesService } from './slides.service';

describe('Service: Slides', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlidesService]
    });
  });

  it('should ...', inject([SlidesService], (service: SlidesService) => {
    expect(service).toBeTruthy();
  }));
});
