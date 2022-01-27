import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ScalesComponent } from './d3-scales.component';

describe('D3ScalesComponent', () => {
  let component: D3ScalesComponent;
  let fixture: ComponentFixture<D3ScalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3ScalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ScalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
