import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AleComponent } from './ale.component';

describe('AleComponent', () => {
  let component: AleComponent;
  let fixture: ComponentFixture<AleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
