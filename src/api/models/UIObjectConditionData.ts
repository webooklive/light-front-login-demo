/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConditionTypes } from './ConditionTypes';
import type { OrderPageDataTypes } from './OrderPageDataTypes';

export type UIObjectConditionData = {
  data_type: OrderPageDataTypes;
  condition_type: ConditionTypes;
  name: string;
  value: string;
};
