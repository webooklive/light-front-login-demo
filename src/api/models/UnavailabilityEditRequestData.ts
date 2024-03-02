/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UnavailabilityDetailData } from './UnavailabilityDetailData';

export type UnavailabilityEditRequestData = {
  date: string;
  id: string;
  all_day: boolean;
  description: string;
  start_date: string;
  start_time: number;
  end_time: number;
  unavailability_details?: Array<UnavailabilityDetailData>;
};
