import axios from "axios";

class serviceApi {
  constructor() {
    axios.defaults.baseURL = `/api`;
  }

  urlHash(url: string) {
    return url.includes("?")
      ? `${url}&timestamp=${new Date().getTime()}`
      : `${url}?timestamp=${new Date().getTime()}`;
  }

  // ===============================
  // GET API REQUEST
  // ===============================
  async fetch(url: string, option = { resolve: true, payload: null }) {
    const hashed_url = this.urlHash(url);

    try {
      let response = await axios.get(hashed_url, this.getHeaders());
      return response.data;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  async fetchRaw(url: string) {
    try {
      const response = await axios.get(url);
      return response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // ===============================
  // POST API REQUEST
  // ===============================
  async push(url: string, { payload = {}, resolve = true, is_attach = false }) {
    try {
      let response = await axios.post(url, payload, this.getHeaders(is_attach));
      return resolve ? response.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // ===============================
  // UPDATE API REQUEST
  // ===============================
  async update(
    url: string,
    { payload = {}, resolve = true, is_attach = false }
  ) {
    try {
      let response = await axios.put(url, payload, this.getHeaders(is_attach));
      return resolve ? response.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // ===============================
  // PATCH API REQUEST
  // ===============================
  async patch(
    url: string,
    { payload = {}, resolve = true, is_attach = false }
  ) {
    try {
      let response = await axios.patch(
        url,
        payload,
        this.getHeaders(is_attach)
      );
      return resolve ? response.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // ===============================
  // DELETE API REQUEST
  // ===============================
  async remove(url: string, option = { payload: {}, resolve: true }) {
    try {
      let response = await axios.delete(url, {
        data: option.payload,
        ...this.getHeaders(),
      });

      return option.resolve ? response.data : response;
    } catch (err) {
      return this.handleErrors(err);
    }
  }

  // ===============================
  // HANDLE API REQUEST ERRORS
  // ===============================
  async handleErrors(err: any) {
    return await err.response?.data;
  }

  // ===============================
  // SETUP REQUEST HEADERS
  // ===============================
  getHeaders(attach = false) {
    return attach
      ? {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      : {
          headers: {
            "Content-Type": "application/json",
          },
        };
  }
}

const serviceAPI = new serviceApi();
export default serviceAPI;
