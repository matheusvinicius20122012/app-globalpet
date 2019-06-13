import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLojaPage } from './login-loja.page';

describe('LoginLojaPage', () => {
  let component: LoginLojaPage;
  let fixture: ComponentFixture<LoginLojaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLojaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLojaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
