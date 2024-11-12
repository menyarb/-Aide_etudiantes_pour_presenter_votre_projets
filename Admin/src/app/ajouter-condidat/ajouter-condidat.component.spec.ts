import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCondidatComponent } from './ajouter-condidat.component';

describe('AjouterCondidatComponent', () => {
  let component: AjouterCondidatComponent;
  let fixture: ComponentFixture<AjouterCondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterCondidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
