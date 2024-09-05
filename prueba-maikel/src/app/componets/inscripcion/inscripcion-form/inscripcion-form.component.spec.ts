import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionFormComponent } from './inscripcion-form.component';

describe('InscripcionFormComponent', () => {
  let component: InscripcionFormComponent;
  let fixture: ComponentFixture<InscripcionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscripcionFormComponent]
    });
    fixture = TestBed.createComponent(InscripcionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
