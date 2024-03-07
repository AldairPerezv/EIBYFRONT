import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantCargoRegisterComponent } from './mant-cargo-register.component';

describe('MantCargoRegisterComponent', () => {
  let component: MantCargoRegisterComponent;
  let fixture: ComponentFixture<MantCargoRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantCargoRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantCargoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
