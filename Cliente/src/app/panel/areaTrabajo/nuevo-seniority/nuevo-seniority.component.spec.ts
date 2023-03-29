import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoSeniorityComponent } from './nuevo-seniority.component';

describe('NuevoSeniorityComponent', () => {
  let component: NuevoSeniorityComponent;
  let fixture: ComponentFixture<NuevoSeniorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoSeniorityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoSeniorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
