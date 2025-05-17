import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: false,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: "",
      password: "",
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log("Formulario enviado", this.loginForm.value)
    } else {
      this.loginForm.markAllAsTouched()
    }
  }
}
