import { Router } from '@angular/router';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  signUpForm: FormGroup;

  imgArray = [
    '../../../assets/img1.jpg',
    '../../../assets/img2.jpg',
    '../../../assets/img3.jpg',
  ];

  indexPicture: number;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {

    this.signUpForm = this.fb.group({
      firstname: [''], lastname: [''], email: [''], password: ['']
    });

  }

  ngOnInit() {
    this.indexPicture = Math.floor(Math.random() * (this.imgArray.length));
  }

  sendUser(): void {
    const userToPost = this.signUpForm.value;
    this.userService.createUser(userToPost).subscribe((eventPosted) => {
      this.router.navigateByUrl('/');
    });
  }

}
