/* eslint-disable no-undef */
function search(query, cb) {
  return fetch(`api/shelters?q=${query}`, {
    // accept: 'application/json',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  console.log('response', response)
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { search };
export default Client;
