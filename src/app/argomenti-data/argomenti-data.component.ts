import { Component } from '@angular/core';
import {LoginService} from "../services/LoginService"

@Component({
  selector: 'app-argomenti-data',
  templateUrl: './argomenti-data.component.html',
  styleUrls: ['./argomenti-data.component.css']
})
export class ArgomentiDataComponent {

  public argomentiData = [{ idListinoBase: 1, idPrev: 1, inEvidenza:1, nomeListino:"", prezzo1: 1 }]

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getTable()
  }

  getTable() {
    this.loginService.getDataArgomenti().subscribe(e => {
      console.log(e)
      this.argomentiData = e.data
      console.log(this.argomentiData)
    })
  }

}
