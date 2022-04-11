import { ErrorType } from '../types/state';
import { HttpCode } from '../consts';
import { toast } from 'react-toastify';
import request from 'axios';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { message, response } = error;

  if (response) {
    // eslint-disable-next-line no-console
    console.log(response);
    switch (response.status) {
      case HttpCode.Bad_request:
        toast.info(response.data.error);
        break;
      case HttpCode.Unauthorized:
        toast.info(response.data.error);
        break;
      case HttpCode.Not_found:
        toast.info(response.data.error);
        break;
      case HttpCode.Ok:
        break;
      default:
        toast.error(response.data.error);
    }
  } else {
    toast.error(message);
  }
};
