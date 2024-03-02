/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkDayType } from './WorkDayType';

export type WorkingHoursData = {
  from_time?: number;
  to_time?: number;
  work_day_type: WorkDayType;
  start_seconds?: Array<number>;
};
