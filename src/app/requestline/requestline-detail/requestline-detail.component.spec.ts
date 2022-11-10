import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlineDetailComponent } from './requestline-detail.component';

describe('RequestlineDetailComponent', () => {
  let component: RequestlineDetailComponent;
  let fixture: ComponentFixture<RequestlineDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestlineDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestlineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
