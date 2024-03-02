/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetPaymentFormRequestData } from '../models/GetPaymentFormRequestData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PaymentsService {
  /**
   * Get Payment Form
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getPaymentForm(requestBody: GetPaymentFormRequestData): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/get_payment_form',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
