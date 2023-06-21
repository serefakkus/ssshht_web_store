import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageGirisComponent } from './welcome-page-giris.component';

describe('WelcomePageGirisComponent', () => {
  let component: WelcomePageGirisComponent;
  let fixture: ComponentFixture<WelcomePageGirisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePageGirisComponent]
    });
    fixture = TestBed.createComponent(WelcomePageGirisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
