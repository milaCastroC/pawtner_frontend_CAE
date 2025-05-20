import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../../../models/auth/login-request';

@Component({
  selector: 'app-login-form',
  standalone: false,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginForm: FormGroup

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: "",
      password: "",
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let credentials: LoginRequest = {
        username: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.authService.login(credentials).subscribe({
        next: (response) => {
          this.toastr.success('Inicio de sesión exitoso', `Bienvenido, ${response.nombreCompleto}`);
        },
        error: (err) => {
          console.error('Error al iniciar sesión:', err);
          this.toastr.error('Correo o contraseña incorrectos', 'Error');
        }
      });
          console.log("Formulario enviado", credentials)

    } else {
      this.loginForm.markAllAsTouched();
    }
  } 

}
  

