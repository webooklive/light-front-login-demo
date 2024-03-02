/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChooseOrderPageData } from './ChooseOrderPageData';
import type { OrderPageData } from './OrderPageData';
import type { WorkingDaysData } from './WorkingDaysData';

export type ExperienceData = {
  id: string;
  time_grouping_minutes: number;
  working_days: WorkingDaysData;
  choose_order_page?: ChooseOrderPageData;
  order_pages: Array<OrderPageData>;
};
