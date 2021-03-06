import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { User } from './../user.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  user: User;

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
  }

}
