import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  ) {
    this.loginForm = this.fb.group({
      email: "",
      password: "",
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.toastr.success("Ejemplo toast success");
      //  this.toastr.warning("Ejemplo toast warning");
      // this.toastr.error("Ejemplo toast error");
      // this.toastr.info("Ejemplo toast info");

      console.log("Formulario enviado", this.loginForm.value)
    } else {
      this.loginForm.markAllAsTouched()
    }
  }
}
