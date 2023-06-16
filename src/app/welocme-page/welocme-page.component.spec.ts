import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelocmePageComponent } from './welocme-page.component';

describe('WelocmePageComponent', () => {
  let component: WelocmePageComponent;
  let fixture: ComponentFixture<WelocmePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelocmePageComponent]
    });
    fixture = TestBed.createComponent(WelocmePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
