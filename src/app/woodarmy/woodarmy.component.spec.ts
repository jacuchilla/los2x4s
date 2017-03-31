/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WoodarmyComponent } from './woodarmy.component';

describe('WoodarmyComponent', () => {
  let component: WoodarmyComponent;
  let fixture: ComponentFixture<WoodarmyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodarmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodarmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
