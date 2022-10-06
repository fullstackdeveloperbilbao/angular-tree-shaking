import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filled2Component } from './filled2.component';

describe('Filled2Component', () => {
  let component: Filled2Component;
  let fixture: ComponentFixture<Filled2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Filled2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Filled2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
