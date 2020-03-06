// import { SubmissionError } from 'redux-form';

import scannerService from 'services/scannerService';
import { 
  REDEEM_DISCOUNT,
  REDEEM_DISCOUNT_SUCCESS,
  REDEEM_DISCOUNT_ERROR
} from './actionTypes';

const redeemDiscountAction = () => ({
  type: REDEEM_DISCOUNT,
});

const redeemDiscountSuccess = results => ({
  type: REDEEM_DISCOUNT_SUCCESS,
  userInfo: results
});

const redeemDiscountError = error => ({
  type: REDEEM_DISCOUNT_ERROR,
  error,
});

export const redeem = qrInfo => async dispatch => {
  try {
    dispatch(redeemDiscountAction());
    const { data } = await scannerService.scanQR({ qrInfo: qrInfo });
    dispatch(redeemDiscountSuccess(data));
  } catch (err) {
    dispatch(redeemDiscountError(err));
  }
};
