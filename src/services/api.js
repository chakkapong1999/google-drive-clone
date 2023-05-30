import axios from 'axios'

const API_ROOT = process.env.VUE_APP_API_URL
const TIMEOUT = 60000

export default class Services {
  constructor ({ baseURL = API_ROOT, timeout = TIMEOUT }) {
    const client = axios.create({
      baseURL,
      timeout
    })

    client.interceptors.request.use(this.handleRequest, this.handleError)
    client.interceptors.response.use(this.handleSuccess, this.handleError)
    this.client = client
  }

  handleRequest (config) {
    config.headers = {
      language: 'TH',
      sid: '12345'
    }
    return config
  }

  handleSuccess (response) {
    if (response.data) {
      return response.data
    }
    return response
  }

  handleError (error) {
    return error.response.data
  }

  async get (path) {
    return await this.client.get(path)
  }

  async post (path, payload, responseType) {
    return await this.client.post(path, payload, { responseType: responseType })
  }

  async put (path, payload) {
    return await this.client.put(path, payload)
  }

  async patch (path, payload) {
    return await this.client.patch(path, payload)
  }

  async delete (path) {
    return await this.client.delete(path)
  }
}
