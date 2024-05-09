import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DonutInfoPage } from './donut-info.page';

describe('DonutInfoPage', () => {
  let component: DonutInfoPage;
  let fixture: ComponentFixture<DonutInfoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonutInfoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DonutInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

