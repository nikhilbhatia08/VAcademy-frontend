export const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://vacademy-production.up.railway.app' : process.env.BACKEND_SLUG ?? 'http://192.168.0.248:3000'

export const LOGIN_API = BASE_URL + '/User/Login'

export const REGISTER_API = BASE_URL + '/User/Register'

export const GET_TOP = BASE_URL + '/Course/get/top'

export const GET_CATS = BASE_URL + '/Course/getCats'

export const GET_COURSE = BASE_URL + '/Course/getCourse/'

export const POST_FORUM = BASE_URL + '/Forum/CreateForum'