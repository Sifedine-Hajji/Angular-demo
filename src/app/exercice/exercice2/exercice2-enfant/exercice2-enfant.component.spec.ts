import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercice2EnfantComponent } from './exercice2-enfant.component';

describe('Exercice2EnfantComponent', () => {
  let component: Exercice2EnfantComponent;
  let fixture: ComponentFixture<Exercice2EnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercice2EnfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercice2EnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
