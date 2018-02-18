import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpiphanousPageComponent } from './epiphanous-page.component';

describe('EpiphanousPageComponent', () => {
  let component: EpiphanousPageComponent;
  let fixture: ComponentFixture<EpiphanousPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpiphanousPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpiphanousPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
