import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPessoaPage } from './add-pessoa.page';

describe('AddPessoaPage', () => {
  let component: AddPessoaPage;
  let fixture: ComponentFixture<AddPessoaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPessoaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPessoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
