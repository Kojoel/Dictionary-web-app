import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordGenComponent } from './word-gen.component';

describe('WordGenComponent', () => {
  let component: WordGenComponent;
  let fixture: ComponentFixture<WordGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordGenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
