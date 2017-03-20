import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginModel } from '../_models/login';
import { AuthenticationService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'app/login/login.component.html',
})

export class LoginComponent  {
  
 skjema: FormGroup;
 error: string;
 loading: boolean;

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

  onLogin() {
    this.loading = true;
    this.error = "";
    var body: string = JSON.stringify({ brukernavn: this.skjema.value.brukernavn, passord: this.skjema.value.passord});

    this.authService.login(body)
        .subscribe(retur => {
            localStorage.setItem('currentUser', JSON.stringify(retur)); // service ?
<<<<<<< HEAD
          //  this.router.navigate(["/"+retur.rolle]);
            this.router.navigate(["/admin" ]);
=======
            this.router.navigate(["/"+retur.rolle]); 
            //this.router.navigate(["/admin"]); // <-- Alltid velg admin for testing
>>>>>>> 20ba562856c6a038ab6202bec96e0aa042cb4c38
        },
        error => { this.loading = false; console.log("Beklager, en feil har oppstått - " + error) } ,
        () => { this.loading = false; console.log("ferdig post-api/bestilling"); }
       
    );
   
  }

  }