
import { AnswerSectionComponent } from './answer-section.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppStoreService } from '../services/app-store.service';
import { CommonModule } from '@angular/common';
import { ChoiceCardComponent } from '../choice-card/choice-card.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('AnswerSectionComponent', () => {
  let fixture: ComponentFixture<AnswerSectionComponent>;
  let component: AnswerSectionComponent;

  beforeEach(async () => {
    // await TestBed.configureTestingModule({
    //   imports: [AnswerSectionComponent],
    //   providers: [AppStoreService],
    //   // schemas: [NO_ERRORS_SCHEMA],
    // }).compileComponents();

    fixture = TestBed.createComponent(AnswerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  test('getTotalQuetions should return a positive number', () => {
    expect(component.getTotalQuetions()).toBeGreaterThanOrEqual(0);
  });

 test('getAnsweredQustions should return a positive number', () => {
   expect(component.getAnsweredQustions()).toBeGreaterThanOrEqual(0);
 });

 it('should create four choice card components', () => {
   const choiceCards = fixture.debugElement.queryAll(
     By.directive(ChoiceCardComponent)
   );
   expect(choiceCards.length).toEqual(4);
 });

 it('should not render submit button if a choice card is not selected', () => {
   const submitButton = fixture.debugElement.query(
     By.css('[data-testid="submit-button"]')
   );
   expect(submitButton).toBeNull();
 });

 it('should render submit button if a choice card is selected',()=>{
  const firstChoiceCard = fixture.debugElement.query(
    By.directive(ChoiceCardComponent)
  );

  firstChoiceCard.triggerEventHandler('click'); // Select the first quiz topic

  fixture.detectChanges() // Re-render to display button

  const submitButton = fixture.debugElement.query(
    By.css('[data-testid="submit-button"]')
  );

  expect(submitButton).not.toBeNull();

 })

 it('should have "Submit Answer" as text content of submit button if not submited', () => {
   const firstChoiceCard = fixture.debugElement.query(
     By.directive(ChoiceCardComponent)
   );

   firstChoiceCard.triggerEventHandler('click'); // Select the first quiz topic

   fixture.detectChanges(); // Re-render to display submit button

   const submitButton = fixture.debugElement.query(
     By.css('[data-testid="submit-button"]')
   );

   expect(submitButton.nativeElement.textContent).toBe('Submit Answer');
 });

 it('should have "Next Question" as text content of submit button if choice card is selected and submited', () => {
   const firstChoiceCard = fixture.debugElement.query(
     By.directive(ChoiceCardComponent)
   );

   firstChoiceCard.triggerEventHandler('click'); // Select the first quiz topic

   fixture.detectChanges(); // Re-render to display submit button

   firstChoiceCard.triggerEventHandler('click'); // Select the first answer option

   const submitButton = fixture.debugElement.query(
     By.css('[data-testid="submit-button"]')
   );

   submitButton.triggerEventHandler('click'); // Submit answer

   fixture.detectChanges(); // Re-render to display changes in UI

   expect(submitButton.nativeElement.textContent).toBe('Next Question');
 });

});



