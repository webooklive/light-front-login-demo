/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RepeatingUnavailabilityRequestData } from './RepeatingUnavailabilityRequestData';
import type { UnavailabilityDetailData } from './UnavailabilityDetailData';

export type UnavailabilityRequestData = {
  all_day: boolean;
  description: string;
  start_date: string;
  end_date: string;
  start_time: number;
  end_time: number;
  unavailability_details?: Array<UnavailabilityDetailData>;
  repeating?: RepeatingUnavailabilityRequestData;
};
