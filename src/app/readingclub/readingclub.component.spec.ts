import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingclubComponent } from './readingclub.component';

describe('ReadingclubComponent', () => {
  let component: ReadingclubComponent;
  let fixture: ComponentFixture<ReadingclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingclubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
