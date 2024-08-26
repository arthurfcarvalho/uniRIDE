import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolSearchComponent } from './carpool-search.component';

describe('CarpoolSearchComponent', () => {
  let component: CarpoolSearchComponent;
  let fixture: ComponentFixture<CarpoolSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarpoolSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarpoolSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
