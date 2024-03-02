/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShiftOut } from '../models/ShiftOut';
import type { ShiftsCreateDTO } from '../models/ShiftsCreateDTO';
import type { ShiftUpdate } from '../models/ShiftUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EmployeesService {
  /**
   * Create Shifts
   * @param requestBody
   * @returns ShiftOut Successful Response
   * @throws ApiError
   */
  public static createShifts(requestBody: ShiftsCreateDTO): CancelablePromise<Array<ShiftOut>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/employees/create-shifts',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Edit Shift
   * @param requestBody
   * @returns ShiftOut Successful Response
   * @throws ApiError
   */
  public static editShift(requestBody: ShiftUpdate): CancelablePromise<ShiftOut> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/employees/edit-shift',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Delete Shift
   * @param shiftId
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deleteShift(shiftId: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/employees/delete-shift',
      query: {
        shift_id: shiftId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
