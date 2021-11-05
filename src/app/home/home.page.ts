import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any;
  //oscuro: boolean = false;
  filtro: string = '';

  constructor(private httpClient: HttpClient) {
    this.users = this.httpClient.get('https://raw.githubusercontent.com/AlumAlbertoPiedra/AplicacionResponsivaPersonalizada/master/src/app/home/MOCK_DATA.json')
  }

  actualizar(){
    location.reload();
  }

}
