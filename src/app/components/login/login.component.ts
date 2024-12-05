import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CertificatesComponent } from "../certificates/certificates.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, CertificatesComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
