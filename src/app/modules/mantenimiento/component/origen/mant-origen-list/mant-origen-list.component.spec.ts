import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantOrigenListComponent } from './mant-origen-list.component';

describe('MantOrigenListComponent', () => {
  let component: MantOrigenListComponent;
  let fixture: ComponentFixture<MantOrigenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantOrigenListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantOrigenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
