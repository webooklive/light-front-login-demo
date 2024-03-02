/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GcalConnectDTO } from '../models/GcalConnectDTO';
import type { UserPreferencesOut } from '../models/UserPreferencesOut';
import type { UserPreferencesUpdateDTO } from '../models/UserPreferencesUpdateDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserPreferencesService {
  /**
   * Get User Preferences
   * @returns UserPreferencesOut Successful Response
   * @throws ApiError
   */
  public static getUserPreferences(): CancelablePromise<UserPreferencesOut> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/user-preferences',
    });
  }

  /**
   * Edit User Preferences
   * @param requestBody
   * @returns UserPreferencesOut Successful Response
   * @throws ApiError
   */
  public static editUserPreferences(requestBody: UserPreferencesUpdateDTO): CancelablePromise<UserPreferencesOut> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/user-preferences',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Gcalconnect
   * @param requestBody
   * @returns UserPreferencesOut Successful Response
   * @throws ApiError
   */
  public static gcalConnect(requestBody: GcalConnectDTO): CancelablePromise<UserPreferencesOut> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/user-preferences/gcal-connect',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
