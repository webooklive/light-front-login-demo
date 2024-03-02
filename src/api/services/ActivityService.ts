/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityItemsRequestData } from '../models/ActivityItemsRequestData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ActivityService {
  /**
   * Get Activity Items
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getActivityItems(requestBody: ActivityItemsRequestData): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/activity/items',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
