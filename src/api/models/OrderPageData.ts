/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AvailabilitySettingsData } from './AvailabilitySettingsData';
import type { BasePriceData } from './BasePriceData';
import type { CustomDetailData } from './CustomDetailData';
import type { CustomPersonalDetailData } from './CustomPersonalDetailData';
import type { ExtraPriceComponentsData } from './ExtraPriceComponentsData';
import type { GreenInvoiceData } from './GreenInvoiceData';
import type { LabelData } from './LabelData';
import type { NotifierData } from './NotifierData';
import type { OpenTicketsOptionData } from './OpenTicketsOptionData';
import type { OrderPageTypes } from './OrderPageTypes';
import type { PluginData } from './PluginData';
import type { UIObjectData } from './UIObjectData';
import type { WaitingListData } from './WaitingListData';
import type { WorkingDaysData } from './WorkingDaysData';

export type OrderPageData = {
  order_page_type: OrderPageTypes;
  is_disabled?: boolean;
  label: LabelData;
  description?: LabelData;
  photo?: string;
  location: LabelData;
  phone: LabelData;
  times_warning?: LabelData;
  custom_email_html?: LabelData;
  plugins: Array<PluginData>;
  notifiers: Array<NotifierData>;
  waiting_list?: WaitingListData;
  open_tickets_option?: OpenTicketsOptionData;
  availability_settings: AvailabilitySettingsData;
  color?: string;
  min_date_in_days?: number;
  max_date_in_days: number;
  start_date?: string;
  end_date?: string;
  after_buffer_minutes: number;
  id: string;
  duration: number;
  persons: number;
  custom_details?: Array<CustomDetailData>;
  custom_personal_details?: Array<CustomPersonalDetailData>;
  price: Array<BasePriceData>;
  objects: Array<UIObjectData>;
  green_invoice_payment?: GreenInvoiceData;
  show_duration: boolean;
  working_days?: WorkingDaysData;
  time_grouping_minutes?: number;
  stripe_tax_id?: string;
  stripe_test_tax_id?: string;
  extra_price_component?: ExtraPriceComponentsData;
  activity_label?: LabelData;
};
