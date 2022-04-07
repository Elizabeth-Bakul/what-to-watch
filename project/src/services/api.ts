import axios, { AxiosInstance, AxiosRequestConfig} from 'axios';
import { getToken } from './token';
import { APIRoute } from '../consts';
import { errorHandle } from './error-handler';
const BACKEND_URL = 'https://9.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token) {
      config.headers['x-token'] = token;
    }

    return config;
  });
  return api;
};


export const getSimilarFilms = async (filmId: number) => {
  const api = createAPI();
  try {
    const { data } = await api.get(`${APIRoute.Films}/${filmId}/similar`);
    return data;
  } catch (error) {
    errorHandle(error);
  }
};


export const getFilmById = async (filmId: number) => {
  const api = createAPI();
  try {
    const { data } = await api.get(`${APIRoute.Films}/${filmId}`);
    return data;
  } catch (error) {
    errorHandle(error);
  }
};


export const getFilmComments = async (filmId: number) => {
  const api = createAPI();
  try {
    const { data } = await api.get(`${APIRoute.Comments}/${filmId}`);
    return data;
  } catch (error) {
    errorHandle(error);
  }
};

export const addNewComment = async (
  comment: string,
  rating: number,
  filmId: number,
) => {
  const api = createAPI();
  try {
    const res = await api.post(`${APIRoute.Comments}/${filmId}`, {
      comment,
      rating,
    });
    return res;
  } catch (error) {
    errorHandle(error);
  }
};
