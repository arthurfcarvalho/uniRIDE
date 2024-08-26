import { Component, Input, OnInit } from '@angular/core';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-carpool-result',
  standalone: true,
  imports: [
    SafeUrlPipe
  ],
  templateUrl: './carpool-result.component.html',
  styleUrl: './carpool-result.component.scss'
})
export class CarpoolResultComponent implements OnInit{
  @Input() nomeMotorista!: string;
  @Input() avaliacaoMotorista!: string | number;
  @Input() pontoPartida!: string;
  @Input() pontoDestino!: string;

  ngOnInit(): void {
      this.avaliacaoMotorista = Number(this.avaliacaoMotorista);
  }

  get googleMapsUrl(): string {
    const apiKey = 'AIzaSyAgowfu8lhLz2MfIyjZ_6PIe2Ojl5g1obk';
    return `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${encodeURIComponent(this.pontoPartida)}&destination=${encodeURIComponent(this.pontoDestino)}`;
  }
}
