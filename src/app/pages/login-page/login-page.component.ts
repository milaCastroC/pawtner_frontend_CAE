import { Component } from '@angular/core';
import { FooterComponent } from '../../globals/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../../modules/auth/components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    LoginFormComponent,
    FooterComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
