import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargarQueryResultComponent } from './descargar-query-result.component';

describe('DescargarQueryResultComponent', () => {
  let component: DescargarQueryResultComponent;
  let fixture: ComponentFixture<DescargarQueryResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescargarQueryResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargarQueryResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
