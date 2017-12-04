import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'app/user-info.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserInfoService]
})
export class UsersComponent implements OnInit {
  userInfos: any;
  constructor(private userInfoService: UserInfoService) { 
  }
  ngOnInit() {
    return this.userInfoService.getData().subscribe(response => {
                                                                  this.userInfos=response;
                                                                  });    
  }

}
