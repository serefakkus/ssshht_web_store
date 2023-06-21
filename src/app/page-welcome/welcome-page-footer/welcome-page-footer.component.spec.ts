import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageFooterComponent } from './welcome-page-footer.component';

describe('WelcomePageFooterComponent', () => {
  let component: WelcomePageFooterComponent;
  let fixture: ComponentFixture<WelcomePageFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePageFooterComponent]
    });
    fixture = TestBed.createComponent(WelcomePageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
