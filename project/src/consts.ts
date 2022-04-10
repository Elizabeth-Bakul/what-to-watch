export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Authorized = 'AUTH',
  NotAuthorized = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Comments = '/comments',
  Login = '/login',
  Logout = 'logout',
  Favorite = '/favorite',
}
export enum HttpCode {
  Ok = 200,
  Bad_request = 400,
  Unauthorized = 401,
  Not_found = 404,
}
export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  Favorite='FAVORITE'
}
export enum FavoriteAddOrRemove {
  Add = 1,
  Remove = 0,
}

export const MAX_COMMENT_LENGTH = 400;
export const MIN_COMMENT_LENGTH = 50;
export const COUNT_FILM_LOADED = 8;
export const DEFAULT_GENRE_VALUE = 'All genres';
export const RATING_STARS=[10,9,8,7,6,5,4,3,2,1];
export const HOUR_IN_MINUTES = 60;
export const COUNT_MORE_FILM_LOADED = 4;
