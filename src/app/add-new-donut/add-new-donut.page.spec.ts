import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AddNewDonutPage } from './add-new-donut.page';

describe('AddNewDonutPage', () => {
  let component: AddNewDonutPage;
  let fixture: ComponentFixture<AddNewDonutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewDonutPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewDonutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

