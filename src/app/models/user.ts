export interface IUserResponse {
  results: IUserData[];
}

export interface IUserData {
  email: string;
  phone: string;
  name: IUserName;
  picture: IUserPicture;
}

export interface IUserName {
  title: string;
  first: string;
  last: string;
}

export interface IUserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}
