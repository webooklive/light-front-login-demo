/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {
  /**
   * Root
   * @returns any Successful Response
   * @throws ApiError
   */
  public static rootExceptGet(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/except',
    });
  }

  /**
   * Root
   * @returns any Successful Response
   * @throws ApiError
   */
  public static rootHead(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'HEAD',
      url: '/',
    });
  }

  /**
   * Root
   * @returns any Successful Response
   * @throws ApiError
   */
  public static rootErrorGet(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/error',
    });
  }

  /**
   * Run Periodic Task
   * @returns any Successful Response
   * @throws ApiError
   */
  public static runPeriodicTaskApiRunPeriodicTaskGet(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/run-periodic-task',
    });
  }
}
