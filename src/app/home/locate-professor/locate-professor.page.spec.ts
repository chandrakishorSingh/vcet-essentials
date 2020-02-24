import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocateProfessorPage } from './locate-professor.page';

describe('LocateProfessorPage', () => {
  let component: LocateProfessorPage;
  let fixture: ComponentFixture<LocateProfessorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateProfessorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocateProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
