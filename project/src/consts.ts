export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/404',
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
export enum HTTP_CODE {
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


