/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UIObjectConditionData } from './UIObjectConditionData';
import type { UIObjectTypes } from './UIObjectTypes';

export type UIObjectData = {
  id: string;
  type: UIObjectTypes;
  condition?: UIObjectConditionData;
};
