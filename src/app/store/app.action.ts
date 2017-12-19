import { Action } from '@ngrx/store';

export const GET_USERS  = 'GET_USERS';
export const GET_USERS_SUCCESS  = 'GET_USERS_SUCCESS';

type sometype = {};

export class GetUsers implements Action {
  readonly type = GET_USERS;
  constructor() {}
}

export class GetUsersSuccess implements Action {
  readonly type = GET_USERS_SUCCESS;

  constructor(public payload: number) {}
}

export type All
  = GetUsers
  | GetUsersSuccess;