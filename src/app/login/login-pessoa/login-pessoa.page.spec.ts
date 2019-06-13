import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPessoaPage } from './login-pessoa.page';

describe('LoginPessoaPage', () => {
  let component: LoginPessoaPage;
  let fixture: ComponentFixture<LoginPessoaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPessoaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPessoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
