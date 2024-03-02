/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentFormType } from './PaymentFormType';
import type { Tip } from './Tip';

export type GetPaymentFormRequestData = {
  account_id: string;
  experience_id: string;
  order_page_id: string;
  entity_id?: string;
  language: string;
  payment_form_type?: PaymentFormType;
  tip?: Tip;
};
