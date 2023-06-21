import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageForgetPassComponent } from './welcome-page-forget-pass.component';

describe('WelcomePageForgetPassComponent', () => {
  let component: WelcomePageForgetPassComponent;
  let fixture: ComponentFixture<WelcomePageForgetPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePageForgetPassComponent]
    });
    fixture = TestBed.createComponent(WelcomePageForgetPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
