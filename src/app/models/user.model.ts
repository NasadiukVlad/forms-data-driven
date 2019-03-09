import {AvailableCity} from '../enums/available-city.enum';
import {Gender} from '../enums/gender.enum';

export class User {
  constructor(public username: string,
              public email: string,
              public city: AvailableCity,
              public gender: Gender) {
    this.username = username;
    this.email = email;
    this.city = city;
    this.gender = gender;
  }
}

