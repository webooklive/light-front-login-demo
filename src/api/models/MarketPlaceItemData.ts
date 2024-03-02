/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImageData } from './ImageData';
import type { LabelData } from './LabelData';
import type { LocationData } from './LocationData';

export type MarketPlaceItemData = {
  id: string;
  title: LabelData;
  subtitle: LabelData;
  description: LabelData;
  logo: string;
  website: string;
  images: Array<ImageData>;
  location: LocationData;
  phone: string;
  facebook?: string;
  instagram?: string;
  whatsapp?: string;
  is_booking: boolean;
  link: string;
  vouchers_link?: string;
  order?: number;
};
