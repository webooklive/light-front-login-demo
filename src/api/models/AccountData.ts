/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CancellationPolicyData } from './CancellationPolicyData';
import type { Currency } from './Currency';
import type { CustomTheme } from './CustomTheme';
import type { ExperienceData } from './ExperienceData';
import type { Language } from './Language';
import type { PropelUserModel } from './PropelUserModel';

export type AccountData = {
  id: string;
  timezone: string;
  name: string;
  last_order_number: number;
  experiences: Array<ExperienceData>;
  cancellation_policies?: Array<CancellationPolicyData>;
  custom_theme?: CustomTheme;
  has_payment_integration?: boolean;
  users?: Array<PropelUserModel>;
  propel_account_id: string;
  terms_conditions_link?: string;
  shifts_as_employee_unavailability: boolean;
  google_integration_enabled: boolean;
  should_send_unavailability_notifications: boolean;
  notifications_email?: string;
  gcal_synced_email?: string;
  logo: string;
  stripe_integration_publishable_key?: string;
  stripe_integration_test_publishable_key?: string;
  currency: Currency;
  default_system_language: Language;
  customer_facing_widgets_languages: Array<Language>;
};
