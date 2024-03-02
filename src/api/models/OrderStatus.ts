/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An enumeration.
 */
export enum OrderStatus {
  REQUESTED = 'requested',
  PAID = 'paid',
  CONFIRMED = 'confirmed',
  PAID_WITH_VOUCHER = 'paid_with_voucher',
  CONVERTED_TO_VOUCHER = 'converted_to_voucher',
  CONVERTED_FROM_VOUCHER = 'converted_from_voucher',
  PAYMENT_LINK_GENERATED = 'payment_link_generated',
  PAID_WITH_PAYMENT_LINK = 'paid_with_payment_link',
  ARCHIVED = 'archived',
}
