import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPanelComponent } from './chart-panel.component';

describe('ChartPanelComponent', () => {
  let component: ChartPanelComponent;
  let fixture: ComponentFixture<ChartPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartPanelComponent]
    });
    fixture = TestBed.createComponent(ChartPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
