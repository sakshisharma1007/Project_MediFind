import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWebsiteComponent } from './user-website.component';

describe('UserWebsiteComponent', () => {
  let component: UserWebsiteComponent;
  let fixture: ComponentFixture<UserWebsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserWebsiteComponent]
    });
    fixture = TestBed.createComponent(UserWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
