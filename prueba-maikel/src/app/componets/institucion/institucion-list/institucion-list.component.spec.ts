import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionListComponent } from './institucion-list.component';

describe('InstitucionListComponent', () => {
  let component: InstitucionListComponent;
  let fixture: ComponentFixture<InstitucionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitucionListComponent]
    });
    fixture = TestBed.createComponent(InstitucionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
