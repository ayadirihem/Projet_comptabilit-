import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturationVenteComponent } from './facturation-vente.component';

describe('FacturationVenteComponent', () => {
  let component: FacturationVenteComponent;
  let fixture: ComponentFixture<FacturationVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturationVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturationVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
