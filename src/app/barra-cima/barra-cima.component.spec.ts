import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraCimaComponent } from './barra-cima.component';

describe('BarraCimaComponent', () => {
  let component: BarraCimaComponent;
  let fixture: ComponentFixture<BarraCimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraCimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraCimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
