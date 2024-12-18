import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizHeaderComponent } from './quiz-header.component';
import { AppStoreService } from '../services/app-store.service';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('QuizHeaderComponent', () => {
  let fixture: ComponentFixture<QuizHeaderComponent>;
  let component: QuizHeaderComponent;

  beforeEach(async () => {
    const anyO: any = {}

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

    // Configure the testing module
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [AppStoreService]
    }).compileComponents();

    // Create the component after mocking
    fixture = TestBed.createComponent(QuizHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set theme to dark mode', () => {
    const themeMode = 'dark'
    component.setTheme(themeMode)
    expect(component.themeMode).toBe(themeMode);
    expect(component.appStoreService.lightMode()).toBe(false);
  });

  it('should set theme to light mode', () => {
    const themeMode = 'light';
    component.setTheme(themeMode);
    expect(component.themeMode).toBe(themeMode);
    expect(component.appStoreService.lightMode()).toBe(true);
  });

  it('should switch between theme modes', () => {
    const currentThemeMode = component.themeMode

    const switchButton = fixture.debugElement.query(
      By.css('[data-testid="switch-button"]')
    );

    switchButton.triggerEventHandler('click');

    expect(component.themeMode).not.toBe(currentThemeMode);

    const isLightModeAfterToggle = component.themeMode === 'light';

    if(isLightModeAfterToggle){
      expect(component.appStoreService.lightMode()).toBe(true);

      switchButton.triggerEventHandler('click'); // Reset mode to original (dark)
      expect(component.themeMode).toBe(currentThemeMode);
      expect(component.appStoreService.lightMode()).toBe(false);

    }else{
      expect(component.appStoreService.lightMode()).toBe(false);

       switchButton.triggerEventHandler('click'); // Reset mode to original (light)
       expect(component.themeMode).toBe(currentThemeMode);
       expect(component.appStoreService.lightMode()).toBe(true);
    }

  });

});
