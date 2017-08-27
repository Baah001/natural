import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalSpeachComponent } from './natural-speach.component';

describe('NaturalSpeachComponent', () => {
  let component: NaturalSpeachComponent;
  let fixture: ComponentFixture<NaturalSpeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalSpeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalSpeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
