import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { HeaderComponent } from '../../core/components/header/header.component';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FooterComponent,
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  cadastroForm!: FormGroup;
  currentStep: number = 1;

  constructor(
    private fb: FormBuilder,
    private toasterService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      genero: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      dataNascimento: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      numero: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      complemento: ['']
    });
  }

  nextStep(): void {
    if (this.currentStep === 1 && this.personalDataIsValid()) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
      this.toasterService.success('Cadastro realizado com sucesso (back ainda não implementado!)', 'Sucesso', {
        progressBar: true
      });
      //falta implementar conexao com back
      this.router.navigate(['/inicio']);
    }
  }

  personalDataIsValid(): boolean {
    return this.cadastroForm.get('nome')?.valid &&
      this.cadastroForm.get('sobrenome')?.valid &&
      this.cadastroForm.get('cpf')?.valid &&
      this.cadastroForm.get('telefone')?.valid &&
      this.cadastroForm.get('genero')?.valid &&
      this.cadastroForm.get('email')?.valid &&
      this.cadastroForm.get('senha')?.valid &&
      this.cadastroForm.get('dataNascimento')?.valid ? true : false;
  }
}
