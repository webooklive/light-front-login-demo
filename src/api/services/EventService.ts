/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateEventRequestData } from '../models/CreateEventRequestData';
import type { EditEventRequestData } from '../models/EditEventRequestData';
import type { EnrichedEventData } from '../models/EnrichedEventData';
import type { SendMessageRequestData } from '../models/SendMessageRequestData';
import type { SlimEventData } from '../models/SlimEventData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EventService {
  /**
   * Create Event
   * @param requestBody
   * @returns EnrichedEventData Successful Response
   * @throws ApiError
   */
  public static createEvent(requestBody: CreateEventRequestData): CancelablePromise<Array<EnrichedEventData>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/event/create_event',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Edit Event
   * @param requestBody
   * @returns EnrichedEventData Successful Response
   * @throws ApiError
   */
  public static editEvent(requestBody: EditEventRequestData): CancelablePromise<EnrichedEventData> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/event/edit_event',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Delete Event
   * @param eventId
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deleteEvent(eventId: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/event/delete_event',
      query: {
        event_id: eventId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Send Emails
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static sendEmails(requestBody: SendMessageRequestData): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/event/send_emails',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Create Event
   * @param eventId
   * @returns SlimEventData Successful Response
   * @throws ApiError
   */
  public static getSlimEvent(eventId: string): CancelablePromise<SlimEventData> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/event/slim',
      query: {
        event_id: eventId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
