import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantCargoListComponent } from './mant-cargo-list.component';

describe('MantCargoListComponent', () => {
  let component: MantCargoListComponent;
  let fixture: ComponentFixture<MantCargoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantCargoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantCargoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
