/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PolicyTypes } from './PolicyTypes';

export type CancellationPolicyData = {
  days_before: number;
  policy_type: PolicyTypes;
  value: number;
};
