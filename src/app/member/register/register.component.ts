import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username = '';
  password = ''
  email = '';
  registerMessage = '';
  constructor(private cs: CommonService) { }

  register(){
    let newuser = {
      "username": this.username,
      "email": this.email,
      "password": this.password
    }
    console.log(newuser);
    this.cs.registerUser(newuser).subscribe( res=>{
      if(res.user.confirmed){
        this.registerMessage = "Successfully registered";
      }
      else{
        this.registerMessage = "Sorry. Cannot register";
      }
    })
  }

  ngOnInit(): void {
  }

}
