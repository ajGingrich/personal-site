import toast from 'react-hot-toast';

import { MAILER } from 'constants/api';
import { postData } from 'utils/service';

export const CONTACT_LOADING = 'CONTACT_LOADING';
export const CONTACT_SUCCESS = 'CONTACT_SUCCESS';
export const CONTACT_ERROR = 'CONTACT_ERROR';

export const sendContactEmailActionCreator = params => async dispatch => {
  dispatch({ type: CONTACT_LOADING });
  try {
    await postData(`${MAILER}/email/contact`, params);
    toast.success(`Thanks ${params.firstName} ${params.lastName}! I'll be in touch soon.`);
    dispatch({ type: CONTACT_SUCCESS });
  } catch (e) {
    toast.error(`Sorry, there has been an error. Please try again later. ${e}`);
    dispatch({ type: CONTACT_ERROR, payload: e });
  }
};
