import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinarComponent } from './treinar.component';

describe('TreinarComponent', () => {
  let component: TreinarComponent;
  let fixture: ComponentFixture<TreinarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
