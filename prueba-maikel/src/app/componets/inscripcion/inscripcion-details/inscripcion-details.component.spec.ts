import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionDetailsComponent } from './inscripcion-details.component';

describe('InscripcionDetailsComponent', () => {
  let component: InscripcionDetailsComponent;
  let fixture: ComponentFixture<InscripcionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscripcionDetailsComponent]
    });
    fixture = TestBed.createComponent(InscripcionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
