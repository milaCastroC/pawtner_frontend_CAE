import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../../../models/auth/login-request';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginForm: FormGroup

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let credentials: LoginRequest = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }
      this.authService.login(credentials).subscribe({
        next: (response) => {
          console.log(response);
          
          if(response.rol === 'veterinario') {
            sessionStorage.setItem('StorageUser', JSON.stringify({userId: response.id, username: this.loginForm.value.username, name: response.nombreCompleto}));
            this.router.navigate(['/dashboard']);
            this.toastr.success('Inicio de sesión exitoso', `Bienvenido, ${response.nombreCompleto}`);
          }else if(response.rol === 'admin') {
            this.toastr.warning(`Hola, ${response.nombreCompleto}. El ingreso como admin aún no está disponible.`, 'Ingreso como admin proximamente...', );
          }
        },
        error: (err) => {
          if (err.status === 401) {
            this.toastr.error('Usuario o contraseña incorrectos', 'Error');
          } else {
            this.toastr.error('Error al iniciar sesión', 'Error');
          }
        }
      });

    } else {
      this.loginForm.markAllAsTouched();
    }
  } 

}
  

