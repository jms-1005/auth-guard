import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Homepage, Register, Specials } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private server = environment.server;
  constructor(private http: HttpClient) { }

  isLoggedIn(){
    if(localStorage.getItem("jwt")){
      return true;
    }
    else
      return false;
  }

  getHome(){
    return this.http.get<Homepage>(this.server + '/api/homepage?populate=deep,2');
  }

  registerUser(data:any){
    return this.http.post<Register>(this.server + '/api/auth/local/register', data);
  }

  login(data:any){
    return this.http.post<{ jwt: string }>(this.server + '/api/auth/local', data);
  }

  getSpecials(){
    return this.http.get<Specials>(this.server + '/api/specials', {
      headers:{
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    });
  }

}
