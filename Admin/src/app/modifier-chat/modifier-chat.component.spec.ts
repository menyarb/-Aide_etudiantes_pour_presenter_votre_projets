import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierChatComponent } from './modifier-chat.component';

describe('ModifierChatComponent', () => {
  let component: ModifierChatComponent;
  let fixture: ComponentFixture<ModifierChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
