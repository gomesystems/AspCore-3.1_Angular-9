import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/Alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];
  // user: User = JSON.parse(localStorage.getItem('user'));

  constructor(private userService: UserService, private alertfy: AlertifyService, private route: ActivatedRoute) { }


// este e apagando o metodo debaixo loadusers()
   ngOnInit() {
     this.route.data.subscribe(data => {
       this.users = data['users'];
      });
     }

  // ngOnInit() {
  //   this.loadusers();
  // }

  // loadusers() {
  //   this.userService.getUsers().subscribe((users: User[]) => {
  //     this.users = users;
  //   }, error => {
  //     this.alertfy.error(error);
  //   });
  // }
}
