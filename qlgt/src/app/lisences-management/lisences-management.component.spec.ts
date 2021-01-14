import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisencesManagementComponent } from './lisences-management.component';

describe('LisencesManagementComponent', () => {
  let component: LisencesManagementComponent;
  let fixture: ComponentFixture<LisencesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisencesManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisencesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
