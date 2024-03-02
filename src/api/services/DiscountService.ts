/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplyDiscountInput } from '../models/ApplyDiscountInput';
import type { ApplyDiscountResponseDTO } from '../models/ApplyDiscountResponseDTO';
import type { DiscountCreateDTO } from '../models/DiscountCreateDTO';
import type { DiscountOut } from '../models/DiscountOut';
import type { StopDiscountInput } from '../models/StopDiscountInput';
import type { UpdateDiscountInput } from '../models/UpdateDiscountInput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DiscountService {
  /**
   * Get Discounts
   * @param page Page number
   * @param perPage Items per page
   * @param search Search value
   * @returns DiscountOut Successful Response
   * @throws ApiError
   */
  public static getDiscounts(
    page: number = 1,
    perPage: number = 10,
    search?: string,
  ): CancelablePromise<Array<DiscountOut>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/discount',
      query: {
        page: page,
        per_page: perPage,
        search: search,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Create Discount
   * @param requestBody
   * @returns DiscountOut Successful Response
   * @throws ApiError
   */
  public static createDiscount(requestBody: DiscountCreateDTO): CancelablePromise<DiscountOut> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/discount',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Update Discount
   * @param requestBody
   * @returns DiscountOut Successful Response
   * @throws ApiError
   */
  public static updateDiscount(requestBody: UpdateDiscountInput): CancelablePromise<DiscountOut> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/discount/update',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Stop Discount
   * @param requestBody
   * @returns DiscountOut Successful Response
   * @throws ApiError
   */
  public static stopDiscount(requestBody: StopDiscountInput): CancelablePromise<DiscountOut> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/discount/stop_discount',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Apply Discount
   * @param requestBody
   * @returns ApplyDiscountResponseDTO Successful Response
   * @throws ApiError
   */
  public static applyDiscount(requestBody: ApplyDiscountInput): CancelablePromise<ApplyDiscountResponseDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/discount/apply',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Discount
   * @param discountId
   * @returns DiscountOut Successful Response
   * @throws ApiError
   */
  public static getDiscountById(discountId: string): CancelablePromise<DiscountOut> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/discount/by-id',
      query: {
        discount_id: discountId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
