import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPanelComponent } from './inicio-panel.component';

describe('InicioPanelComponent', () => {
  let component: InicioPanelComponent;
  let fixture: ComponentFixture<InicioPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
