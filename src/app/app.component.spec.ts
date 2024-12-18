import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { QuizHeaderComponent } from './quiz-header/quiz-header.component';
import { AnswerSectionComponent } from './answer-section/answer-section.component';
import { QuestionSectionComponent } from './question-section/question-section.component';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    let anyO:any = {}
    const matchMediaMockedReturnValue: MediaQueryList = {
      ...anyO,
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      media: '(prefers-color-scheme: light)',
    };

    // Mock window.matchMedia before any component creation
    window.matchMedia = jest.fn(() => matchMediaMockedReturnValue);

    await TestBed.configureTestingModule({
      imports: [CommonModule, QuestionSectionComponent, AnswerSectionComponent, QuizHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create the app', () => {
    expect(fixture).toBeTruthy();
  });


});
