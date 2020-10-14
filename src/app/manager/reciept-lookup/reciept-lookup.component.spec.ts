import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieptLookupComponent } from './reciept-lookup.component';

describe('RecieptLookupComponent', () => {
  let component: RecieptLookupComponent;
  let fixture: ComponentFixture<RecieptLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecieptLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieptLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
