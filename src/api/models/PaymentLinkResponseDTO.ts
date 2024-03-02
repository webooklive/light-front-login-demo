/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Language } from './Language';
import type { PaymentLinkOut } from './PaymentLinkOut';

export type PaymentLinkResponseDTO = {
  payment_link: PaymentLinkOut;
  logo: string;
  stripe_publishable_key?: string;
  languages: Array<Language>;
  default_system_language: Language;
};
