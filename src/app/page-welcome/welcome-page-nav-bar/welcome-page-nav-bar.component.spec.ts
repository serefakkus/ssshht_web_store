import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageNavBarComponent } from './welcome-page-nav-bar.component';

describe('WelcomePageNavBarComponent', () => {
  let component: WelcomePageNavBarComponent;
  let fixture: ComponentFixture<WelcomePageNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePageNavBarComponent]
    });
    fixture = TestBed.createComponent(WelcomePageNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
