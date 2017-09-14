import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInlineTemplateInlineStyleComponent } from './login--inline-template--inline-style.component';

describe('LoginInlineTemplateInlineStyleComponent', () => {
  let component: LoginInlineTemplateInlineStyleComponent;
  let fixture: ComponentFixture<LoginInlineTemplateInlineStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInlineTemplateInlineStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInlineTemplateInlineStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
