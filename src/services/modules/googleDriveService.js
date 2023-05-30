import Services from '../api'
import {
  SERVICE_UPLOAD_AND_CREATE_FOLDER,
  SERVICE_GET_GILES
} from '@/constants/serviceNameConstant'

const client = new Services({
  baseURL: process.env.VUE_APP_API_URL
})

export const uploadAndCreateFolder = async (payload) => {
  return await client.post(SERVICE_UPLOAD_AND_CREATE_FOLDER, { ...payload })
}

export const getFiles = async (payload) => {
  return await client.post(SERVICE_GET_GILES, { ...payload })
}
