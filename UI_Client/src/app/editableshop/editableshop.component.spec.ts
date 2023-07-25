import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableshopComponent } from './editableshop.component';

describe('EditableshopComponent', () => {
  let component: EditableshopComponent;
  let fixture: ComponentFixture<EditableshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditableshopComponent]
    });
    fixture = TestBed.createComponent(EditableshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
