export interface IProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  isPublished?: boolean;
  createdAt?: string;
  category?: string;
  image?: string;
  rating?: IRating;
}

export interface IRating {
  rate: number;
  count: number;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface ILoginResponse {
  token: string
}