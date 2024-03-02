/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmendOrderRequestData } from '../models/AmendOrderRequestData';
import type { CheckinRequestData } from '../models/CheckinRequestData';
import type { CreateOrderRequestData } from '../models/CreateOrderRequestData';
import type { EditOrderRequestData } from '../models/EditOrderRequestData';
import type { GetAvailableDatesRequestData } from '../models/GetAvailableDatesRequestData';
import type { OrderData } from '../models/OrderData';
import type { OrderStatus } from '../models/OrderStatus';
import type { SaveOrderRequestData } from '../models/SaveOrderRequestData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrderService {
  /**
   * Get Available Dates
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getAvailableDates(requestBody: GetAvailableDatesRequestData): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/order/available_dates',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Available Dates Admin
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getAvailableDatesAdmin(requestBody: GetAvailableDatesRequestData): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/order/available_dates/admin',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Save Order
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static saveOrder(requestBody: SaveOrderRequestData): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/order/save_order',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Create Order
   * @param requestBody
   * @returns OrderData Successful Response
   * @throws ApiError
   */
  public static createOrder(requestBody: CreateOrderRequestData): CancelablePromise<OrderData> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/order/create_order',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Edit Order
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static editOrder(requestBody: EditOrderRequestData): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/order/edit_order',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Delete Order
   * @param orderId
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deleteOrder(orderId: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/order/delete_order',
      query: {
        order_id: orderId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Event Orders
   * @param parentId
   * @returns OrderData Successful Response
   * @throws ApiError
   */
  public static getEventOrders(parentId: string): CancelablePromise<Array<OrderData>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/order/get_event_orders',
      query: {
        parent_id: parentId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Checkin
   * @param requestBody
   * @returns OrderData Successful Response
   * @throws ApiError
   */
  public static checkinOrder(requestBody: CheckinRequestData): CancelablePromise<OrderData> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/order/checkin',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Order
   * @param orderId
   * @returns OrderData Successful Response
   * @throws ApiError
   */
  public static getOrder(orderId: string): CancelablePromise<OrderData> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/order/get_order',
      query: {
        order_id: orderId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Fetch Order
   * @param orderId
   * @returns any Successful Response
   * @throws ApiError
   */
  public static fetchOrderById(orderId: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/order/id',
      query: {
        order_id: orderId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Fetch Order By Number
   * @param orderNumber
   * @param orderEmail
   * @returns any Successful Response
   * @throws ApiError
   */
  public static fetchOrderByNumber(orderNumber: any, orderEmail: any): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/order/number',
      query: {
        order_number: orderNumber,
        order_email: orderEmail,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Amend Order
   * @param requestBody
   * @returns any Successful Response
   * @throws ApiError
   */
  public static amendOrder(requestBody: AmendOrderRequestData): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/order/amend_order',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Archived Orders
   * @param page Page number
   * @param perPage Items per page
   * @param search Search value
   * @returns OrderData Successful Response
   * @throws ApiError
   */
  public static getArchivedOrders(
    page: number = 1,
    perPage: number = 10,
    search?: string,
  ): CancelablePromise<Array<OrderData>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/order/get_archived_orders',
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
   * Get Upcoming Orders
   * @param page Page number
   * @param perPage Items per page
   * @param search Search value
   * @param statuses List of statuses
   * @returns OrderData Successful Response
   * @throws ApiError
   */
  public static getAllOrders(
    page: number = 1,
    perPage: number = 10,
    search?: string,
    statuses?: Array<OrderStatus>,
  ): CancelablePromise<Array<OrderData>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/order',
      query: {
        page: page,
        per_page: perPage,
        search: search,
        statuses: statuses,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
