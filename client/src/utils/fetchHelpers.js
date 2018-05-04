/**
 * For now, we are only handling 200s or failures so this is enough until...
 * 
 * @param {Response} response 
 * @return {object|Promise<object>} Returns either the JSON parsed reponse body or a Promise rejection
 */
export const handleResponse = (response) => {
  if(response.ok){
      return response.json();
  }
  const body = response.json();
  const rejection = {
      ...response,
      body,
  }
  return Promise.reject(rejection);
}

/**
* We catch network errors to add formatting necessary for the final error catching process to dispatch the appropriate message
* 
* @param {object} error
* @throws {object} Will throw the response if their is a network error
*/
export const handleNetworkFailure = error => {
  error.response = {
      status: 0,
      statusText: 'Error connecting to server. Please check your internet connection and try again.',
  };
  throw error;
}


/**
* Fetches don't support timeouts natively. In order to achieve that we race our fetch against a Promise.reject that resolves after a given
* timeout. (Promises only resolve once so even though the HTTP connection will not be ended, it's eventual response will never be handled in the case
* of a rejection. In the case of a success, the settimout silently fires to no effect.)
* 
* @param {string} url 
* @param {number} [timeout=15000] 
* @param {object} [fetchOptions] Equivalent to the second argument passed to Fetch()
* @return {Promise} return a Promise.race
*/
export const timedFetch = ({
  url, 
  timeout = 15000, 
  fetchOptions
}) => {
  return Promise.race([
      fetch(url, fetchOptions), 
      new Promise((_, reject) => {
          setTimeout(() => reject({ timeoutError: `Request timed out after ${ timeout / 1000}s.`}), timeout)
      })
  ])
}
