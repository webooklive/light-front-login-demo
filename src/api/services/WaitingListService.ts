/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WaitingListItemData } from '../models/WaitingListItemData';
import type { WaitingListRegisterRequestData } from '../models/WaitingListRegisterRequestData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WaitingListService {
  /**
   * Register To Waiting List
   * @param requestBody
   * @returns WaitingListItemData Successful Response
   * @throws ApiError
   */
  public static registerToWaitingList(
    requestBody: WaitingListRegisterRequestData,
  ): CancelablePromise<WaitingListItemData> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/waiting_list/register',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Waiting List By Event
   * @param eventId
   * @param page Page number
   * @param perPage Items per page
   * @param search Search value
   * @returns WaitingListItemData Successful Response
   * @throws ApiError
   */
  public static getWaitingListByEvent(
    eventId: string,
    page: number = 1,
    perPage: number = 10,
    search?: string,
  ): CancelablePromise<Array<WaitingListItemData>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/waiting_list',
      query: {
        event_id: eventId,
        page: page,
        per_page: perPage,
        search: search,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
