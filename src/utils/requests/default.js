export const API_HOST = "https://divercity-test.herokuapp.com";

export async function request(method, url, data = {}, header = {}) {
  return fetch(`https://divercity-test.herokuapp.com/${url}`, {
    method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      ...header,
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: method === "GET" ? undefined : JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then((response) => {
      if (!response.ok) {
        const error = {
          status: response.status,
          statustext: response.statusText,
          data: Promise.resolve(response.json()),
          // data: response.json().then(error => error)
        };
        return Promise.reject(error);
        // throw error;
      }
      if (response.status === 204) {
        const responseBody = {
          status: true,
          statusCode: response.status,
          statustext: response.statusText,
        };
        return responseBody;
      }
      return response.json();
    })
    .then((res) => res);
}

/**
 * Make a get request to the API server.
 *
 * @param url
 * @param query
 * @returns {Promise<any>}
 */
export function get$(url) {
  return request("GET", url);
}

/**
 * Make a post request to the API server.
 *
 * @param url
 * @param data
 * @param header
 * @returns {Promise<any>}
 */
export function post$(url, data = {}, header = {}) {
  return request("POST", url, data, header);
}

/**
 * Make a patch request to the API server.
 *
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
export function patch$(url, data = {}) {
  return request("PATCH", url, data);
}

/**
 * Make a delete request to the API server.
 *
 * @param url
 * @returns {Promise<any>}
 */
export function delete$(url) {
  return request("DELETE", url);
}
