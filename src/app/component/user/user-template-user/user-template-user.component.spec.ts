import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTemplateUserComponent } from './user-template-user.component';

describe('UserTemplateUserComponent', () => {
  let component: UserTemplateUserComponent;
  let fixture: ComponentFixture<UserTemplateUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTemplateUserComponent]
    });
    fixture = TestBed.createComponent(UserTemplateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
