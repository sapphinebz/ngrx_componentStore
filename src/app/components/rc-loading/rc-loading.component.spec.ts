import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcLoadingComponent } from './rc-loading.component';

describe('RcLoadingComponent', () => {
  let component: RcLoadingComponent;
  let fixture: ComponentFixture<RcLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RcLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
