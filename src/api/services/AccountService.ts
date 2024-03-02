/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountData } from '../models/AccountData';
import type { GcalConnectDTO } from '../models/GcalConnectDTO';
import type { UpdateAccountInput } from '../models/UpdateAccountInput';
import type { UpdateOrderPageInput } from '../models/UpdateOrderPageInput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountService {
  /**
   * Get Account
   * @param accountId
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getAccount(accountId: any): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/account',
      query: {
        account_id: accountId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Account Typed
   * @param accountId
   * @returns AccountData Successful Response
   * @throws ApiError
   */
  public static getAccountTyped(accountId: any): CancelablePromise<AccountData> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/account/dontuseiterrors',
      query: {
        account_id: accountId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Authenticated Account
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getAccountAuthenticated(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/account/authenticated',
    });
  }

  /**
   * Update Order Page
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static updateOrderPage(requestBody: UpdateOrderPageInput): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/account/update-order-page',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Update Account Settings
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static updateAccountSettings(requestBody: UpdateAccountInput): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/account/update-account_settings',
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
   * @returns any Successful Response
   * @throws ApiError
   */
  public static accountGcalConnect(requestBody: GcalConnectDTO): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/account/gcal-connect',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
