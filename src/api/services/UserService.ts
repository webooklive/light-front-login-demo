/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropelUserModel } from '../models/PropelUserModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {
  /**
   * Get Users
   * @returns PropelUserModel Successful Response
   * @throws ApiError
   */
  public static getUsers(): CancelablePromise<Array<PropelUserModel>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/users',
    });
  }
}
