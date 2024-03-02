/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplyVoucherDTO } from '../models/ApplyVoucherDTO';
import type { ArchiveVoucherDTO } from '../models/ArchiveVoucherDTO';
import type { ConvertToVoucherDTO } from '../models/ConvertToVoucherDTO';
import type { SendVoucherDTO } from '../models/SendVoucherDTO';
import type { VoucherCreateDTO } from '../models/VoucherCreateDTO';
import type { VoucherOut } from '../models/VoucherOut';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VoucherService {
  /**
   * Create Voucher
   * @param requestBody
   * @returns VoucherOut Successful Response
   * @throws ApiError
   */
  public static createVoucher(requestBody: VoucherCreateDTO): CancelablePromise<VoucherOut> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/voucher/create_voucher',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Create Admin Voucher
   * @param requestBody
   * @returns VoucherOut Successful Response
   * @throws ApiError
   */
  public static createAdminVoucher(requestBody: VoucherCreateDTO): CancelablePromise<VoucherOut> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/voucher/create_admin_voucher',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Apply Voucher
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static applyVoucher(requestBody: ApplyVoucherDTO): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/voucher/apply_voucher',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Voucher
   * @param voucherCode
   * @returns VoucherOut Successful Response
   * @throws ApiError
   */
  public static getVoucher(voucherCode: string): CancelablePromise<VoucherOut> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/voucher/get_voucher',
      query: {
        voucher_code: voucherCode,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Vouchers
   * @param page Page number
   * @param perPage Items per page
   * @param search Search value
   * @returns VoucherOut Successful Response
   * @throws ApiError
   */
  public static getVouchers(
    page: number = 1,
    perPage: number = 10,
    search?: string,
  ): CancelablePromise<Array<VoucherOut>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/voucher/get_vouchers',
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
   * Convert To Voucher
   * @param requestBody
   * @returns VoucherOut Successful Response
   * @throws ApiError
   */
  public static convertToVoucher(requestBody: ConvertToVoucherDTO): CancelablePromise<VoucherOut> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/voucher/convert_to_voucher',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Archive Voucher
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static archiveVoucher(requestBody: ArchiveVoucherDTO): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/voucher/archive_voucher',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Resend Email
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static sendVoucher(requestBody: SendVoucherDTO): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/voucher/send_voucher',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
