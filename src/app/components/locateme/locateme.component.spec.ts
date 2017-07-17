import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatemeComponent } from './locateme.component';

describe('LocatemeComponent', () => {
  let component: LocatemeComponent;
  let fixture: ComponentFixture<LocatemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocatemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
