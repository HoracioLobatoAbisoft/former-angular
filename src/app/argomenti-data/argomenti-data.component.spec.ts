import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgomentiDataComponent } from './argomenti-data.component';

describe('ArgomentiDataComponent', () => {
  let component: ArgomentiDataComponent;
  let fixture: ComponentFixture<ArgomentiDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgomentiDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgomentiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
