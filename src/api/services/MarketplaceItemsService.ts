/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MarketPlaceItemData } from '../models/MarketPlaceItemData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MarketplaceItemsService {
  /**
   * Get Items
   * @returns MarketPlaceItemData Successful Response
   * @throws ApiError
   */
  public static getMarketplaceItems(): CancelablePromise<Array<MarketPlaceItemData>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/marketplace/items/get',
    });
  }

  /**
   * Get Item
   * @param marketplaceItemId
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getMarketplaceItemById(marketplaceItemId: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/marketplace/items/get_by_id',
      query: {
        marketplace_item_id: marketplaceItemId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
