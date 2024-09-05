import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionDetailsComponent } from './institucion-details.component';

describe('InstitucionDetailsComponent', () => {
  let component: InstitucionDetailsComponent;
  let fixture: ComponentFixture<InstitucionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitucionDetailsComponent]
    });
    fixture = TestBed.createComponent(InstitucionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
