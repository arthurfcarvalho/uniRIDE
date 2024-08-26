import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolResultComponent } from './carpool-result.component';

describe('CarpoolResultComponent', () => {
  let component: CarpoolResultComponent;
  let fixture: ComponentFixture<CarpoolResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarpoolResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarpoolResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
