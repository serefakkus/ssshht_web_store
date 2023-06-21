import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GizlilikPolitikasiComponent } from './gizlilik-politikasi.component';

describe('GizlilikPolitikasiComponent', () => {
  let component: GizlilikPolitikasiComponent;
  let fixture: ComponentFixture<GizlilikPolitikasiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GizlilikPolitikasiComponent]
    });
    fixture = TestBed.createComponent(GizlilikPolitikasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
