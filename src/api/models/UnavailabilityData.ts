/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UnavailabilityDetailData } from './UnavailabilityDetailData';

export type UnavailabilityData = {
  id: string;
  all_day: boolean;
  date: string;
  description: string;
  start_time: number;
  end_time: number;
  order_page_id?: string;
  custom_details?: any;
  sequence: number;
  unavailability_details?: Array<UnavailabilityDetailData>;
};
