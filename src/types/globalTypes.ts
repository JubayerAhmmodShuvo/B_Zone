export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
}

export interface TokenResponse {
  token: string;
}
export interface IReview {
  user: string;
  _id: string;
  comment: string;
}
export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: Date;
  reviews?: Review[];
}

export interface Review {
  username: string;
  rating: number;
  comment: string;
}

export interface ReviewData {
  id: string;
  review: Review;
}

export interface BookData {
  title: string;
  author: string;
  genre: string;
  publicationDate: Date;
}
