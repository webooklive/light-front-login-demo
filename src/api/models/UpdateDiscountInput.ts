/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscountStatus } from './DiscountStatus';

export type UpdateDiscountInput = {
  id: string;
  start_date: string;
  end_date: string;
  status: DiscountStatus;
  value: number;
  description: string;
};
