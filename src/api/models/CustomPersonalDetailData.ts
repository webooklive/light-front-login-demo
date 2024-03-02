/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomPersonalDetailTypes } from './CustomPersonalDetailTypes';
import type { LabelData } from './LabelData';

export type CustomPersonalDetailData = {
  id: string;
  label: LabelData;
  errorLabel?: LabelData;
  console_label?: LabelData;
  type: CustomPersonalDetailTypes;
  hide_from_console: boolean;
  drop_down_options?: Array<LabelData>;
};
