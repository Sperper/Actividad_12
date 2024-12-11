import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  singers: any;
  filtro: string = "";
  constructor(private httpClient:HttpClient) {
    this.singers = this.httpClient.get('https://raw.githubusercontent.com/Sperper/json-Actividad12/refs/heads/master/JSON_Artistas.json');
  }

}
