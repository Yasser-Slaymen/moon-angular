import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagComponentComponent } from './imag-component.component';

describe('ImagComponentComponent', () => {
  let component: ImagComponentComponent;
  let fixture: ComponentFixture<ImagComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagComponentComponent]
    });
    fixture = TestBed.createComponent(ImagComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
