import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargarAudioComponent } from './descargar-audio.component';

describe('DescargarAudioComponent', () => {
  let component: DescargarAudioComponent;
  let fixture: ComponentFixture<DescargarAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescargarAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargarAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
