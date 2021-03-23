import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeuuComponent } from './eeuu.component';

describe('EeuuComponent', () => {
  let component: EeuuComponent;
  let fixture: ComponentFixture<EeuuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeuuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeuuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
