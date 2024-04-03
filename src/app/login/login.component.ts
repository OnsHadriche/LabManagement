import { Component } from '@angular/core';
import { AuthService } from 'src/Services/AuthService';
import { MemberComponent } from '../member/member.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //injection de dependance
  constructor(private AUTH:AuthService, private router :Router)
  {

  }
  SIGNIN():void
  {
    this.AUTH.doGoogleLogin().then(()=>{this.router.navigate(['/members'])})
  }
}
