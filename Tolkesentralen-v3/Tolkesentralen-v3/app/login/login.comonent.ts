import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginModel } from '../_models/login';
import { AuthenticationService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { Login } from '../_models/models';

@Component({
  templateUrl: 'app/login/login.component.html',
})

export class LoginComponent  {
  
 skjema: FormGroup;
 error: string;
 loading: boolean;
 kunde: Login;

  constructor(
      private authService: AuthenticationService,
      private router: Router,
      private fb: FormBuilder ) {
        this.skjema = fb.group({
            // Skjekk om brukernavnet er en gyldig e-post adresse
            brukernavn: ["", Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")],
            // Todo -> Begrensinger til passord
            passord: ["", Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")]
        });
  }

  ngOnInit() {
      // reset login status
      this.authService.logout();
  }

  // Skal flyttes til service
  getPath(nr: number) {
      var path = "";
      switch (nr) {
          case 1: return path = "/admin";
          case 2: return path = "/kunde";
          case 3: return path = "/tolk";
      }
  }

  onLogin() {
    this.loading = true;
    this.error = "";
    var ny = new Login();
    ny.email = this.skjema.value.brukernavn;
    ny.passord = this.skjema.value.passord;
    var body: string = JSON.stringify(ny);

    this.authService.login(body)
        .subscribe(retur => {
            localStorage.setItem('currentUser', JSON.stringify(retur)); // service ?
            this.router.navigate([this.getPath(retur.role)]);
        },
        error => { this.loading = false; console.log("Beklager, en feil har oppstått - " + error) } ,
        () => { this.loading = false; console.log("ferdig post-api/bestilling"); }
       
    );
   
  }

  }