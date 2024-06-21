import axios from "axios";

// const serverUrlUser = "http://localhost:8000/";
const serverUrlUser = "http://3.34.187.76:8000/";

async function get(endpoint, params = "") {
  const serverUrl = serverUrlUser;

  return axios.get(serverUrl + endpoint + "/" + params, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
}

async function post(endpoint, data) {
  const serverUrl = serverUrlUser;
  const bodyData = JSON.stringify(data);

  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
}

async function postData(endpoint, data) {
  const serverUrl = serverUrlUser;

  return axios.post(serverUrl + endpoint, data, {
    headers: {
      "Content-Type": "multipart/form-data; boundary=myBoundary",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
}

// put method request with JSON.stringify()
async function put(endpoint, data) {
  const serverUrl = serverUrlUser;
  const bodyData = JSON.stringify(data);

  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
}

/**
 * Q) why is the function name "del", not a "delete?"
 *
 * "delete" is reserved keyword of JavaScript language
 * so, use "del" first, and alias to "delete" when export it
 */
async function del(endpoint, params = "", data = {}) {
  const serverUrl = serverUrlUser;

  return axios.delete(serverUrl + endpoint + "/" + params, {
    data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
}

async function patch(endpoint, data) {
  const serverUrl = serverUrlUser;
  const bodyData = JSON.stringify(data);

  return axios.patch(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
}

/**
 * now we can use those methods like this :
 * api.get(), api.post(), api.put(), api.del
 *
 * if i want to request with post method to "/user/signin", with userInfo data:
 * api.post("/user/signin", userInfo) will work
 */
export { get, post, postData, put, patch, del as delete };
