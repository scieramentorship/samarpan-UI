import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaddComponent } from './campadd.component';

describe('CampaddComponent', () => {
  let component: CampaddComponent;
  let fixture: ComponentFixture<CampaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
