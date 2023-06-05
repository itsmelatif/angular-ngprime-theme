import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhThemeComponent } from './mh-theme.component';

describe('MhThemeComponent', () => {
  let component: MhThemeComponent;
  let fixture: ComponentFixture<MhThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MhThemeComponent]
    });
    fixture = TestBed.createComponent(MhThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
