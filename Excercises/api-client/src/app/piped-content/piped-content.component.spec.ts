import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipedContentComponent } from './piped-content.component';

describe('PipedContentComponent', () => {
  let component: PipedContentComponent;
  let fixture: ComponentFixture<PipedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
