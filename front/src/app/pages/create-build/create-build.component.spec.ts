import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBuildComponent } from './create-build.component';

describe('CreateBuildComponent', () => {
  let component: CreateBuildComponent;
  let fixture: ComponentFixture<CreateBuildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBuildComponent]
    });
    fixture = TestBed.createComponent(CreateBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
