import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = '';
  bannerimage = '';
  server = environment.server;
  constructor(private cs: CommonService) { }

  ngOnInit(): void {
    this.cs.getHome().subscribe( res=> {
      this.name = res.data.attributes.Name;
      this.bannerimage = this.server + res.data.attributes.bannerimage.data.attributes.url;
    })
  }

}
