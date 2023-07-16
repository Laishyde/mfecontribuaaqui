import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuProjetoComponent } from './meu-projeto.component';

describe('MeuProjetoComponent', () => {
  let component: MeuProjetoComponent;
  let fixture: ComponentFixture<MeuProjetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeuProjetoComponent]
    });
    fixture = TestBed.createComponent(MeuProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
