import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageKayitComponent } from './welcome-page-kayit.component';

describe('WelcomePageKayitComponent', () => {
  let component: WelcomePageKayitComponent;
  let fixture: ComponentFixture<WelcomePageKayitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePageKayitComponent]
    });
    fixture = TestBed.createComponent(WelcomePageKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
