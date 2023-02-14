import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPessoaComponent } from './excluir-pessoa.component';

describe('ExcluirPessoaComponent', () => {
  let component: ExcluirPessoaComponent;
  let fixture: ComponentFixture<ExcluirPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirPessoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
