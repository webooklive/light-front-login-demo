/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LabelData } from './LabelData';
import type { WorkingDaysData } from './WorkingDaysData';

export type UpdateOrderPageInput = {
  id: string;
  order_page_type: string;
  label: LabelData;
  description: LabelData;
  location: LabelData;
  phone: LabelData;
  color: string;
  min_date_in_days: number;
  max_date_in_days: number;
  after_buffer_minutes: number;
  duration: number;
  working_days?: WorkingDaysData;
};
