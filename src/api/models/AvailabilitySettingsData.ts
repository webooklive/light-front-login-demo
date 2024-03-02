/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RestrictionData } from './RestrictionData';
import type { Restrictions } from './Restrictions';

export type AvailabilitySettingsData = {
  parallel_order_page_ids?: Array<string>;
  restrictions?: Array<RestrictionData>;
  restrictions_obj?: Restrictions;
};
