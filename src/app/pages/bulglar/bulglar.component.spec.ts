import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulglarComponent } from './bulglar.component';

describe('BulglarComponent', () => {
  let component: BulglarComponent;
  let fixture: ComponentFixture<BulglarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulglarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulglarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
