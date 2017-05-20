import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginModel } from '../_models/login';
import { LoginService } from '../_services/login.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'app/login/login.component.html',
})

export class LoginComponent  {
  
 skjema: FormGroup;
 error: string;
 loading: boolean;

  constructor(
      private authService: LoginService,
      private router: Router,
      private fb: FormBuilder ) {
        this.skjema = fb.group({
            // Skjekk om brukernavnet er en gyldig e-post adresse
            brukernavn: ["", Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")],
            // Todo -> Begrensinger til passord, forløping velegnet til testing
            passord: ["", Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{4,30}")]
        });
  }

  ngOnInit() {
      // reset login status
      this.authService.logout();
  }

  onLogin() {
    this.loading = true;
    this.error = "";
    var body: string = JSON.stringify({ brukernavn: this.skjema.value.brukernavn, passord: this.skjema.value.passord});

    this.authService.login(body)
        .subscribe(response => {
            this.loading = false;
            localStorage.setItem('id', JSON.stringify(response.id)); // TODO: Fjern denne
            localStorage.setItem('currentUser', JSON.stringify(response));
            this.router.navigate(["/" + response.rolle]); 
        },
        error => {
            this.loading = false; 
            if (error.status == 401) {
                this.error = "Feil brukernavn eller passord";
            } else {
                this.error = "Noe gikk galt";
            }
        }
    );
   
  }

  }