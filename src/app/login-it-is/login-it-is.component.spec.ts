import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginItIsComponent } from './login-it-is.component';

describe('LoginItIsComponent', () => {
  let component: LoginItIsComponent;
  let fixture: ComponentFixture<LoginItIsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginItIsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginItIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
