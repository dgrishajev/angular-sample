import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { User } from './../user.interface';
import { UserService } from './../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  user: User;
  userForm: FormGroup;

  createForm() {
    let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        telRegEx   = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
        zipRegEx   = /^\d{5}(?:[-\s]\d{4})?$/,
        coordRegEx = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/,
        urlRegEx   = /@^(http\:\/\/|https\:\/\/)?([a-z0-9][a-z0-9\-]*\.)+[a-z0-9][a-z0-9\-]*$@i/;
    this.userForm = this.fb.group({
      name: [this.user.name, Validators.required],
      username: [this.user.username, Validators.required],
      email: [this.user.email, [Validators.required, Validators.pattern(emailRegEx)]],
      address: this.fb.group({
        street: [this.user.address.street, Validators.required],
        suite: [this.user.address.suite, Validators.required],
        city: [this.user.address.city, Validators.required],
        zipcode: [this.user.address.zipcode, [Validators.required, Validators.pattern(zipRegEx)]],
        geo: this.fb.group({
          lat: [this.user.address.geo.lat, [Validators.required, Validators.pattern(coordRegEx)]],
          lng: [this.user.address.geo.lng, [Validators.required, Validators.pattern(coordRegEx)]],
        }),
      }),
      phone: [this.user.phone, [Validators.required, Validators.pattern(telRegEx)]],
      website: [this.user.website, [Validators.required, Validators.pattern(urlRegEx)]],
      company: this.fb.group({
        name: [this.user.company.name, Validators.required],
        catchPhrase: [this.user.company.catchPhrase, Validators.required],
        bs: [this.user.company.bs, Validators.required],
      })
    });
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
      this.createForm();
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.userService.updateUser(this.user).subscribe(() => this.goBack());
  }

  ngOnInit() {
    this.getUser();
  }

}
