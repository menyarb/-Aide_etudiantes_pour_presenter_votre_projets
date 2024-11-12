import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterChatComponent } from './ajouter-chat.component';

describe('AjouterChatComponent', () => {
  let component: AjouterChatComponent;
  let fixture: ComponentFixture<AjouterChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
