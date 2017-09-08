import {async, ComponentFixture, TestBed, tick} from '@angular/core/testing';

import {TestComponentComponent} from './test-component.component';
import {ActivatedRoute} from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { convertToParamMap, ParamMap } from '@angular/router';
import {Observable, Subject} from "rxjs";
let testData = { testData:  {result: true, 'baseWordResult': 0.92499999993459999, 'wordResult': 0.9249999999999999}};





class ActivatedRouteMock {

  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  get data() {
    return this.subject.asObservable();
  }

}

fdescribe('TestComponentComponent', () => {
  let component: TestComponentComponent;
  let fixture: ComponentFixture<TestComponentComponent>;
  let route;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponentComponent],
      providers: [
        {provide: ActivatedRoute, useClass: ActivatedRouteMock}
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('should give a false response', () => {
    route = TestBed.get(ActivatedRoute);
    route.push(testData);
    expect(component.myResponseMessage).toContain('Well', 'display the weldone page');

  });
});

