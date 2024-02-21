import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildsComponent } from './builds.component';

describe('BuildsComponent', () => {
  let component: BuildsComponent;
  let fixture: ComponentFixture<BuildsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildsComponent]
    });
    fixture = TestBed.createComponent(BuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
