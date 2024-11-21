import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CertificatesComponent } from "../certificates/certificates.component";
import { LogoCriarcontaComponent } from "../logo-criarconta/logo-criarconta.component";
import { RegisterAreaComponent } from "../register-area/register-area.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FooterComponent, CertificatesComponent, LogoCriarcontaComponent, RegisterAreaComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
