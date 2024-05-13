import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { RegisterComponent } from './auth/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HttpClientModule, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AuthService]
})
export class AppComponent {
  title = 'rumos-blog-frontend';
}
