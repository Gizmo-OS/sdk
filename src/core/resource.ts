// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { GizmoSDK } from '../client';

export abstract class APIResource {
  protected _client: GizmoSDK;

  constructor(client: GizmoSDK) {
    this._client = client;
  }
}
