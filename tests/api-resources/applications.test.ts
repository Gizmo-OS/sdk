// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GizmoSDK from 'gizmo-sdk';

const client = new GizmoSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource applications', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.applications.create({
      leadProviderSlug: 'leadProviderSlug',
      primaryBorrowerEmail: 'primaryBorrowerEmail',
      primaryBorrowerFirstName: 'primaryBorrowerFirstName',
      primaryBorrowerLastName: 'primaryBorrowerLastName',
      primaryBorrowerPhone: 'primaryBorrowerPhone',
      subjectPropertyState: 'al',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.applications.create({
      leadProviderSlug: 'leadProviderSlug',
      primaryBorrowerEmail: 'primaryBorrowerEmail',
      primaryBorrowerFirstName: 'primaryBorrowerFirstName',
      primaryBorrowerLastName: 'primaryBorrowerLastName',
      primaryBorrowerPhone: 'primaryBorrowerPhone',
      subjectPropertyState: 'al',
      crmId: 'crmId',
      loanPurpose: 'purchase',
      losId: 'losId',
      primaryBorrowerDateOfBirth: 'primaryBorrowerDateOfBirth',
      primaryBorrowerSsn: 'primaryBorrowerSsn',
      subjectPropertyCity: 'subjectPropertyCity',
      subjectPropertyStreetAddress: 'subjectPropertyStreetAddress',
      subjectPropertyZip: 'subjectPropertyZip',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.applications.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.applications.update('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.applications.update(
        'id',
        {
          crmId: 'crmId',
          loanPurpose: 'purchase',
          losId: 'losId',
          primaryBorrowerDateOfBirth: 'primaryBorrowerDateOfBirth',
          primaryBorrowerEmail: 'primaryBorrowerEmail',
          primaryBorrowerFirstName: 'primaryBorrowerFirstName',
          primaryBorrowerLastName: 'primaryBorrowerLastName',
          primaryBorrowerPhone: 'primaryBorrowerPhone',
          primaryBorrowerSsn: 'primaryBorrowerSsn',
          status: 'NEW',
          subjectPropertyCity: 'subjectPropertyCity',
          subjectPropertyState: 'al',
          subjectPropertyStreetAddress: 'subjectPropertyStreetAddress',
          subjectPropertyZip: 'subjectPropertyZip',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GizmoSDK.NotFoundError);
  });
});
