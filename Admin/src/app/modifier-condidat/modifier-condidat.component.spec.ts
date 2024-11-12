import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCondidatComponent } from './modifier-condidat.component';

describe('ModifierCondidatComponent', () => {
  let component: ModifierCondidatComponent;
  let fixture: ComponentFixture<ModifierCondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCondidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
