/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GameplayService } from './gameplay.service';

describe('Service: Gameplay', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameplayService]
    });
  });

  it('should ...', inject([GameplayService], (service: GameplayService) => {
    expect(service).toBeTruthy();
  }));
});
