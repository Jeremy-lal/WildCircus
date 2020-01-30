import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  signInForm: FormGroup;

  imgArray = [
    '../../../assets/img1.jpg',
    '../../../assets/img2.jpg',
    '../../../assets/img3.jpg',
];

  indexPicture: number;

  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.indexPicture = Math.floor(Math.random() * (this.imgArray.length));

    this.signInForm = this.fb.group({
      email: ['', [Validators.required]],
      pwd: ['', [Validators.required]]
    });
  }

  login() {
    this.userService.connexion(this.signInForm.value).subscribe((user) => {
      this.userService.currentUser = user;
      if (this.userService.currentUser !== undefined) {
        console.log(this.userService.currentUser);
        this.router.navigateByUrl('/');
      }
    });
  }
}
