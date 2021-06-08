import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamplistComponent } from './camplist.component';

describe('CamplistComponent', () => {
  let component: CamplistComponent;
  let fixture: ComponentFixture<CamplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
