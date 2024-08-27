import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../core/components/header/header.component';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CarpoolResultComponent } from '../../shared/components/carpool-result/carpool-result.component';

@Component({
  selector: 'app-carpool-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    CarpoolResultComponent
  ],
  templateUrl: './carpool-search.component.html',
  styleUrl: './carpool-search.component.scss'
})
export class CarpoolSearchComponent implements OnInit{
  procurarCaronaForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.procurarCaronaForm = this.fb.group({
      pontoPartida: ['', Validators.required],
      bairroDestino: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const bairro = params.get('bairro');
      if (bairro) {
        this.procurarCaronaForm.patchValue({
          bairroDestino: bairro
        });
      }
    });
  }

  onProcurarCarona(): void {
    if (this.procurarCaronaForm.valid) {
      console.log('Procurar Carona:', this.procurarCaronaForm.value);
      // Lógica futura para redirecionar para a página de resultados
    }
  }
}
