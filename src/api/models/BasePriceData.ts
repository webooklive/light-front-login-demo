/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderPageDataTypes } from './OrderPageDataTypes';
import type { PriceTypes } from './PriceTypes';

export type BasePriceData = {
  type: PriceTypes;
  data_type: OrderPageDataTypes;
  name?: string;
};
