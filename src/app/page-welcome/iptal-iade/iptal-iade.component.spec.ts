import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IptalIadeComponent } from './iptal-iade.component';

describe('IptalIadeComponent', () => {
  let component: IptalIadeComponent;
  let fixture: ComponentFixture<IptalIadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IptalIadeComponent]
    });
    fixture = TestBed.createComponent(IptalIadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
