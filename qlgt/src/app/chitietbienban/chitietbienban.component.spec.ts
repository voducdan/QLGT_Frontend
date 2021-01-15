import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietbienbanComponent } from './chitietbienban.component';

describe('ChitietbienbanComponent', () => {
  let component: ChitietbienbanComponent;
  let fixture: ComponentFixture<ChitietbienbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitietbienbanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietbienbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
