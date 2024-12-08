import { Component, OnInit } from '@angular/core';
import { CriarContaScreenComponent } from "./criar-conta-screen/criar-conta-screen.component";
import { CertificatesComponent } from "../certificates/certificates.component";
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, CriarContaScreenComponent, CertificatesComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.myForm = fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      telefone: ['']
    });
   }

  ngOnInit(): void {
      
  }

  onSubmit() {
    if (this.myForm.valid) {
      const req: {
        "login": string,
        "password": string,
        "role": string
      } = {
        "login": this.myForm.get("nome")?.value as string,
        "password": this.myForm.get("password")?.value as string,
        "role": "USER"
      }
      this.authService.createUser(req).subscribe();
    } else {
      console.log("Form is invalid");
    }
  }
}
