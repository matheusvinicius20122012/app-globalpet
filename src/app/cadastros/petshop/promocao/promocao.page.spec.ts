import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocaoPage } from './promocao.page';

describe('PromocaoPage', () => {
  let component: PromocaoPage;
  let fixture: ComponentFixture<PromocaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
