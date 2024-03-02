/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscountType } from './DiscountType';

export type DiscountCreateDTO = {
  start_date: string;
  end_date: string;
  type: DiscountType;
  value: number;
  code: string;
  description: string;
};
