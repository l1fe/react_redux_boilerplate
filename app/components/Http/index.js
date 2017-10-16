import 'isomorphic-fetch';
import reduxApi from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';
import { cloneDeep } from 'lodash';
import fetchIntercept from 'fetch-intercept';
// import { store } from 'application';

function onError(response) {
  if (response.status !== 401) {
    return response;
  }

  // Handle 401 redirects here

  return response;
}

fetchIntercept.register({
  request: (url, configuration) => {
    const { headers = {}, ...rest } = cloneDeep(configuration);

    if (headers['Content-Type'] === undefined) {
      headers['Content-Type'] = 'application/json';
    }

    // in case we have to let browser choose content-type
    if (headers['Content-Type'] === false) {
      delete headers['Content-Type'];
    }

    // Inject Auth Bearer token here

    return [url, {
      ...rest,
      headers,
    }];
  },

  response: onError,
  responseError: onError,
});

function createApi(params) {
  return reduxApi(params).use('fetch', adapterFetch(fetch));
}

export { createApi }; // eslint-disable-line import/prefer-default-export
