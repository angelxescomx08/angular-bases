import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonBallCharacterAddComponent } from './dragon-ball-character-add.component';

describe('DragonBallCharacterAddComponent', () => {
  let component: DragonBallCharacterAddComponent;
  let fixture: ComponentFixture<DragonBallCharacterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonBallCharacterAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonBallCharacterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
