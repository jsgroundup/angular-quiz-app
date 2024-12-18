
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionSectionComponent } from './question-section.component';
import { AppStoreService } from '../services/app-store.service';

describe('QuestionSectionComponent', () => {
 let fixture: ComponentFixture<QuestionSectionComponent>;
 let component: QuestionSectionComponent;
 beforeEach(async () => {
   await TestBed.configureTestingModule({
     providers: [AppStoreService],
   }).compileComponents();

   fixture = TestBed.createComponent(QuestionSectionComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
 });

 it('should create the component', () => {
   expect(component).toBeTruthy();
 });

});


