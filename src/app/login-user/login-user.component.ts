import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {LoginService} from "../services/LoginService"

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {

  constructor(private loginService: LoginService) { }

  loginForm = new FormGroup({
    id: new FormControl(''),
    chiave: new FormControl(''),
  });

  public showData = false


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("Hola")
  }


  handleLogin() {
    let data = {
      id: this.loginForm.get('id')?.value,
      chiave: this.loginForm.get("chiave")?.value
    }

    this.loginService.postLogin(data).subscribe(e => {
      localStorage.setItem("token", e.token);
      console.log(e.token)
      this.showData = true
    })

  }
}
