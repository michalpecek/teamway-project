import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [MatToolbarModule]

    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

  });

  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });

  it('should set running test to true', () => {
    expect(comp.runningTest).withContext('false initially').toBe(false);
    comp.startClicked();
    expect(comp.runningTest).withContext('Test is running now').toBe(true);

  });
});
