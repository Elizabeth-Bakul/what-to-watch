import { ErrorType } from '../types/state';
import { HTTP_CODE } from '../consts';
import { toast } from 'react-toastify';
import request from 'axios';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.Bad_request:
        toast.info(response.data.error);
        break;
      case HTTP_CODE.Unauthorized:
        toast.info(response.data.error);
        break;
      case HTTP_CODE.Not_found:
        toast.info(response.data.error);
        break;
    }
  }
};
