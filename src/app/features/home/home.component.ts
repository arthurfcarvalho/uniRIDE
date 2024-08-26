import { Component } from '@angular/core';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../core/components/header/header.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  procurarCaronaForm!: FormGroup;
  cadastrarCaronaForm!: FormGroup;
  selectedTab: string = 'procurar';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toasterService: ToastrService
  ) {}

  ngOnInit(): void {
    this.procurarCaronaForm = this.fb.group({
      bairro: ['', Validators.required]
    });

    this.cadastrarCaronaForm = this.fb.group({
      pontoPartida: ['', Validators.required],
      bairroDestino: ['', Validators.required]
    });
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  onProcurarCarona(): void {
    if (this.procurarCaronaForm.valid) {
      console.log('Procurar Carona:', this.procurarCaronaForm.value);
      this.router.navigate(['/procurar-caronas/', this.procurarCaronaForm.value.bairro]);
    } else {
      this.router.navigate(['/procurar-caronas']);
    }
  }

  onCadastrarCarona(): void {
    if (this.cadastrarCaronaForm.valid) {
      console.log('Cadastrar Carona:', this.cadastrarCaronaForm.value);
      this.toasterService.success('Carona cadastrada com sucesso! (back ainda não integrado!)', 'Sucesso', {
        progressBar: true
      });
    }
  }
}
