import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhosInRoomPage } from './whos-in-room.page';

describe('WhosInRoomPage', () => {
  let component: WhosInRoomPage;
  let fixture: ComponentFixture<WhosInRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhosInRoomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhosInRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
