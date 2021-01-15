import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinviphamComponent } from './thongtinvipham.component';

describe('ThongtinviphamComponent', () => {
  let component: ThongtinviphamComponent;
  let fixture: ComponentFixture<ThongtinviphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongtinviphamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinviphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
