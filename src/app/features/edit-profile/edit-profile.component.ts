import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../core/components/header/header.component';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {
  editarPerfilForm!: FormGroup;
  selectedTab: string = 'dadosPessoais';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.editarPerfilForm = this.fb.group({
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

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  onSubmit(): void {
    if (this.editarPerfilForm.valid) {
      console.log('Perfil atualizado:', this.editarPerfilForm.value);
      // Lógica futura para atualizar o perfil do usuário
      this.router.navigate(['/']);
    }
  }
}
