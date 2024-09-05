import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionListComponent } from './inscripcion-list.component';

describe('InscripcionListComponent', () => {
  let component: InscripcionListComponent;
  let fixture: ComponentFixture<InscripcionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscripcionListComponent]
    });
    fixture = TestBed.createComponent(InscripcionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
