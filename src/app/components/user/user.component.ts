import { Component, OnInit } from '@angular/core';

// Services
import { UserService } from '../../services/user.service';

// Models
import {
  IUserResponse,
  IUserData,
  IUserName,
  IUserPicture,
} from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  picture: string;
  loading: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getRandomUser();
  }

  getRandomUser(): void {
    this.loading = true;
    this.userService.getRandomName().subscribe((response: IUserResponse) => {
      const { results } = response;
      const [data] = results;

      const {
        name,
        email,
        phone,
        picture,
      }: {
        name: IUserName;
        email: string;
        phone: string;
        picture: IUserPicture;
      } = data;

      this.name = `${name.first} ${name.last}`; // Using template literals
      this.email = email;
      this.phone = phone;
      this.picture = picture.large;
      this.loading = false;
    });
  }
}
