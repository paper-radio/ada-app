import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlebaPageComponent } from './gleba-page.component';

describe('GlebaPageComponent', () => {
  let component: GlebaPageComponent;
  let fixture: ComponentFixture<GlebaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlebaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlebaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
