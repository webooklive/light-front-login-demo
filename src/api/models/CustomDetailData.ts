/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomDetailTypes } from './CustomDetailTypes';
import type { LabelData } from './LabelData';

export type CustomDetailData = {
  cls: string;
  name: string;
  default_value?: any;
  icon: string;
  type: CustomDetailTypes;
  label?: LabelData;
  should_show_in_details?: boolean;
};
