
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoiceCardComponent } from './choice-card.component';
import { CommonModule } from '@angular/common';
import { AppStoreService } from '../services/app-store.service';

describe('ChoiceCardComponent', () => {
  let fixture: ComponentFixture<ChoiceCardComponent>;
  let component: ChoiceCardComponent;
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [AppStoreService]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoiceCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
