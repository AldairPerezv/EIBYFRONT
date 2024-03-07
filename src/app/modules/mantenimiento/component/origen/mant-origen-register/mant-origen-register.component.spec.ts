import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantOrigenRegisterComponent } from './mant-origen-register.component';

describe('MantOrigenRegisterComponent', () => {
  let component: MantOrigenRegisterComponent;
  let fixture: ComponentFixture<MantOrigenRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantOrigenRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantOrigenRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
