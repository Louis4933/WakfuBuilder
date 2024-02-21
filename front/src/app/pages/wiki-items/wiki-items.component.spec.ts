import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiItemsComponent } from './wiki-items.component';

describe('WikiItemsComponent', () => {
  let component: WikiItemsComponent;
  let fixture: ComponentFixture<WikiItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WikiItemsComponent]
    });
    fixture = TestBed.createComponent(WikiItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
