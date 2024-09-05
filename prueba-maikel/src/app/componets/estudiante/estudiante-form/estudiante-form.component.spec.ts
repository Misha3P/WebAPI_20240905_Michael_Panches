import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteFormComponent } from './estudiante-form.component';

describe('EstudianteFormComponent', () => {
  let component: EstudianteFormComponent;
  let fixture: ComponentFixture<EstudianteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudianteFormComponent]
    });
    fixture = TestBed.createComponent(EstudianteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
