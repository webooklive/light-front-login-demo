/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentLinkCreateDTO } from '../models/PaymentLinkCreateDTO';
import type { PaymentLinkOut } from '../models/PaymentLinkOut';
import type { PaymentLinkResponseDTO } from '../models/PaymentLinkResponseDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PaymentLinkService {
  /**
   * Get Payment Link
   * @param paymentLinkId
   * @returns PaymentLinkResponseDTO Successful Response
   * @throws ApiError
   */
  public static getPaymentLink(paymentLinkId: string): CancelablePromise<PaymentLinkResponseDTO> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/payment_link',
      query: {
        payment_link_id: paymentLinkId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Create Payment Link
   * @param requestBody
   * @returns PaymentLinkOut Successful Response
   * @throws ApiError
   */
  public static createPaymentLink(requestBody: PaymentLinkCreateDTO): CancelablePromise<PaymentLinkOut> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/payment_link',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Create Payment Link Admin
   * @param requestBody
   * @returns PaymentLinkOut Successful Response
   * @throws ApiError
   */
  public static createPaymentLinkAdmin(requestBody: PaymentLinkCreateDTO): CancelablePromise<PaymentLinkOut> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/payment_link/admin',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Payment Links
   * @param orderId
   * @returns PaymentLinkOut Successful Response
   * @throws ApiError
   */
  public static getPaymentLinkByOrderId(orderId: string): CancelablePromise<Array<PaymentLinkOut>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/payment_link/get_by_order',
      query: {
        order_id: orderId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Payment Links
   * @returns PaymentLinkOut Successful Response
   * @throws ApiError
   */
  public static getAllPaymentLinks(): CancelablePromise<Array<PaymentLinkOut>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/payment_link/list',
    });
  }
}
