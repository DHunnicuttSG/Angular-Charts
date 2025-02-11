import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChart2Component } from './my-chart2.component';

describe('MyChart2Component', () => {
  let component: MyChart2Component;
  let fixture: ComponentFixture<MyChart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyChart2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
