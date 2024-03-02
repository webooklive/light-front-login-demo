/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnrichedEventData } from '../models/EnrichedEventData';
import type { OrderData } from '../models/OrderData';
import type { ShiftOut } from '../models/ShiftOut';
import type { UnavailabilityData } from '../models/UnavailabilityData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CalendarService {
  /**
   * Get Orders
   * @param startDate Start date (YYYY-MM-DD)
   * @param endDate End date (YYYY-MM-DD)
   * @returns OrderData Successful Response
   * @throws ApiError
   */
  public static getCalendarOrders(
    startDate?: string,
    endDate?: string,
  ): CancelablePromise<Record<string, Array<OrderData>>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/calendar/orders',
      query: {
        start_date: startDate,
        end_date: endDate,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Unavailabilities
   * @param startDate Start date (YYYY-MM-DD)
   * @param endDate End date (YYYY-MM-DD)
   * @returns UnavailabilityData Successful Response
   * @throws ApiError
   */
  public static getCalendarUnavailabilities(
    startDate?: string,
    endDate?: string,
  ): CancelablePromise<Record<string, Array<UnavailabilityData>>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/calendar/unavailabilities',
      query: {
        start_date: startDate,
        end_date: endDate,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Shifts
   * @param startDate Start date (YYYY-MM-DD)
   * @param endDate End date (YYYY-MM-DD)
   * @returns ShiftOut Successful Response
   * @throws ApiError
   */
  public static getCalendarShifts(
    startDate?: string,
    endDate?: string,
  ): CancelablePromise<Record<string, Array<ShiftOut>>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/calendar/shifts',
      query: {
        start_date: startDate,
        end_date: endDate,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Event
   * @param startDate Start date (YYYY-MM-DD)
   * @param endDate End date (YYYY-MM-DD)
   * @returns EnrichedEventData Successful Response
   * @throws ApiError
   */
  public static getCalendarEvents(
    startDate?: string,
    endDate?: string,
  ): CancelablePromise<Record<string, Array<EnrichedEventData>>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/calendar/events',
      query: {
        start_date: startDate,
        end_date: endDate,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
