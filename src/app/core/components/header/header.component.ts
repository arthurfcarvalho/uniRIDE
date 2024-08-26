import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user!: any;
  dropdownOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const currentRoute = this.router.url;
    if (currentRoute === '/' || currentRoute === '/login' || currentRoute === '/cadastrar') {
      this.user = undefined;
    } else {
      this.user = { name: 'Arthur Carvalho' };
    }
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  editProfile(): void {
    this.dropdownOpen = false;
    this.router.navigate(['/editar-perfil']);
  }

  logout(): void {
    this.dropdownOpen = false;
    // Lógica de logout
    this.user = null;
    this.router.navigate(['/login']);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-menu')) {
      this.dropdownOpen = false;
    }
  }
}
