// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Applications extends APIResource {
  /**
   * Create Application
   */
  create(body: ApplicationCreateParams, options?: RequestOptions): APIPromise<ApplicationCreateResponse> {
    return this._client.post('/applications', { body, ...options });
  }

  /**
   * Get Application
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ApplicationRetrieveResponse> {
    return this._client.get(path`/applications/${id}`, options);
  }

  /**
   * Update Application
   */
  update(
    id: string,
    body: ApplicationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ApplicationUpdateResponse> {
    return this._client.patch(path`/applications/${id}`, { body, ...options });
  }
}

export type LoanPurpose = 'purchase' | 'refi' | 'refiCashOut';

export type Milestone =
  | 'NEW'
  | 'ATTEMPTED'
  | 'CONTACTED'
  | 'CREDIT_PULLED'
  | 'PRE_APPROVED'
  | 'APPLICATION'
  | 'PROCESSING'
  | 'SUBMITTAL'
  | 'RESUBMITTAL'
  | 'CONDITIONALLY_APPROVED'
  | 'FINAL_APPROVED'
  | 'DOCS_OUT'
  | 'FUNDED'
  | 'PURCHASED'
  | 'COMPLETED'
  | 'WITHDRAWN'
  | 'DENIED';

/**
 * The two-letter state abbreviation in lowercase
 */
export type State =
  | 'al'
  | 'ak'
  | 'az'
  | 'ar'
  | 'ca'
  | 'co'
  | 'ct'
  | 'de'
  | 'dc'
  | 'fl'
  | 'ga'
  | 'hi'
  | 'id'
  | 'il'
  | 'in'
  | 'ia'
  | 'ks'
  | 'ky'
  | 'la'
  | 'me'
  | 'md'
  | 'ma'
  | 'mi'
  | 'mn'
  | 'ms'
  | 'mo'
  | 'mt'
  | 'ne'
  | 'nv'
  | 'nh'
  | 'nj'
  | 'nm'
  | 'ny'
  | 'nc'
  | 'nd'
  | 'oh'
  | 'ok'
  | 'or'
  | 'pa'
  | 'ri'
  | 'sc'
  | 'sd'
  | 'tn'
  | 'tx'
  | 'ut'
  | 'vt'
  | 'va'
  | 'wa'
  | 'wv'
  | 'wi'
  | 'wy';

export interface ApplicationCreateResponse {
  id: string;
}

/**
 * The Application object
 */
export interface ApplicationRetrieveResponse {
  id: string;

  createdAt: number;

  leadProviderSlug: string;

  orgId: string;

  primaryBorrowerEmail: string;

  primaryBorrowerFirstName: string;

  primaryBorrowerLastName: string;

  primaryBorrowerPhone: string;

  status: Milestone;

  /**
   * The two-letter state abbreviation in lowercase
   */
  subjectPropertyState: State;

  crmId?: string;

  loanPurpose?: LoanPurpose;

  losId?: string;

  primaryBorrowerDateOfBirth?: string;

  primaryBorrowerSsn?: string;

  subjectPropertyCity?: string;

  subjectPropertyStreetAddress?: string;

  subjectPropertyZip?: string;

  teamId?: string;

  updatedAt?: number;
}

export type ApplicationUpdateResponse = null;

export interface ApplicationCreateParams {
  leadProviderSlug: string;

  primaryBorrowerEmail: string;

  primaryBorrowerFirstName: string;

  primaryBorrowerLastName: string;

  primaryBorrowerPhone: string;

  /**
   * The two-letter state abbreviation in lowercase
   */
  subjectPropertyState: State;

  crmId?: string;

  loanPurpose?: LoanPurpose;

  losId?: string;

  primaryBorrowerDateOfBirth?: string;

  primaryBorrowerSsn?: string;

  subjectPropertyCity?: string;

  subjectPropertyStreetAddress?: string;

  subjectPropertyZip?: string;

  teamId?: string;
}

export interface ApplicationUpdateParams {
  crmId?: string;

  loanPurpose?: LoanPurpose;

  losId?: string;

  primaryBorrowerDateOfBirth?: string;

  primaryBorrowerEmail?: string;

  primaryBorrowerFirstName?: string;

  primaryBorrowerLastName?: string;

  primaryBorrowerPhone?: string;

  primaryBorrowerSsn?: string;

  status?: Milestone;

  subjectPropertyCity?: string;

  /**
   * The two-letter state abbreviation in lowercase
   */
  subjectPropertyState?: State;

  subjectPropertyStreetAddress?: string;

  subjectPropertyZip?: string;

  teamId?: string;
}

export declare namespace Applications {
  export {
    type LoanPurpose as LoanPurpose,
    type Milestone as Milestone,
    type State as State,
    type ApplicationCreateResponse as ApplicationCreateResponse,
    type ApplicationRetrieveResponse as ApplicationRetrieveResponse,
    type ApplicationUpdateResponse as ApplicationUpdateResponse,
    type ApplicationCreateParams as ApplicationCreateParams,
    type ApplicationUpdateParams as ApplicationUpdateParams,
  };
}
