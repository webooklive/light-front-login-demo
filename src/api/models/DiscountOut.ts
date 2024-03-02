/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscountStatus } from './DiscountStatus';
import type { DiscountType } from './DiscountType';

export type DiscountOut = {
  account_id: string;
  start_date: string;
  end_date: string;
  type: DiscountType;
  status: DiscountStatus;
  created_at: string;
  value: number;
  code: string;
  description: string;
  used_count: number;
  id: string;
};
