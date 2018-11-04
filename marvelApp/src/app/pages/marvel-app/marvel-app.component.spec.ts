import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelAppComponent } from './marvel-app.component';

describe('MarvelAppComponent', () => {
  let component: MarvelAppComponent;
  let fixture: ComponentFixture<MarvelAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
