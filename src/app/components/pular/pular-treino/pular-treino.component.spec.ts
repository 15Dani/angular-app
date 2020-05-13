import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PularTreinoComponent } from './pular-treino.component';

describe('PularTreinoComponent', () => {
  let component: PularTreinoComponent;
  let fixture: ComponentFixture<PularTreinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PularTreinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PularTreinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
