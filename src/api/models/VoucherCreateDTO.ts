/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VoucherCreateDTO = {
  language: string;
  account_id: string;
  experience_id?: string;
  order_page_id?: string;
  price: number;
  custom_details?: any;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  custom_personal_details?: any;
  punches?: number;
  tickets?: number;
  code?: string;
  persons?: number;
  duration?: number;
  can_spam?: boolean;
};
