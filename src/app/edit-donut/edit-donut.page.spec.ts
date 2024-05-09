import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditDonutPage } from './edit-donut.page';

describe('EditDonutPage', () => {
  let component: EditDonutPage;
  let fixture: ComponentFixture<EditDonutPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditDonutPage],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(EditDonutPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

