import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CavePageComponent } from './cave-page.component';

describe('CavePageComponent', () => {
  let component: CavePageComponent;
  let fixture: ComponentFixture<CavePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CavePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CavePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
