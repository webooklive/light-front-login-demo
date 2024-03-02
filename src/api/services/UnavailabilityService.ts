/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UnavailabilityData } from '../models/UnavailabilityData';
import type { UnavailabilityEditRequestData } from '../models/UnavailabilityEditRequestData';
import type { UnavailabilityRequestData } from '../models/UnavailabilityRequestData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UnavailabilityService {
  /**
   * Create Unavailability
   * @param requestBody
   * @returns UnavailabilityData Successful Response
   * @throws ApiError
   */
  public static createUnavailability(
    requestBody: UnavailabilityRequestData,
  ): CancelablePromise<Array<UnavailabilityData>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/unavailability',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Delete Unavailability
   * @param unavailabilityId
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deleteUnavailability(unavailabilityId: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/unavailability',
      query: {
        unavailability_id: unavailabilityId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Edit Unavailability
   * @param requestBody
   * @returns UnavailabilityData Successful Response
   * @throws ApiError
   */
  public static editUnavailability(requestBody: UnavailabilityEditRequestData): CancelablePromise<UnavailabilityData> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/unavailability/edit',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
