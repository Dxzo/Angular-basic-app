import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css'],
  providers: [AuthenticationService]
})
export class LoginHomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  public Email: string;
  public Password: string;
  public ShowValidationAlert: boolean = false;

  ngOnInit() {
  }

  SignIn(): void {
    this.authenticationService.AuthCredentials(this.Email, this.Password, (result) => {
      if (result.isValid) {
        this.router.navigateByUrl('/portal');
      } else {
        this.ShowValidationAlert = true;
      }
    });
  }

}
