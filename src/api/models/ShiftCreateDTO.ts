/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ShiftCreateDTO = {
  employee_id: string;
  date: string;
  start_time: number;
  end_time: number;
  should_propagate_to_orders?: boolean;
};
