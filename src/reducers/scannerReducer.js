import { REDEEM_DISCOUNT, REDEEM_DISCOUNT_SUCCESS, REDEEM_DISCOUNT_ERROR } from 'actions/actionTypes'; 

const initialState =  {
    loading: false,
    data: [],
    redeemedSuccess: false,
    userInfo: {},
    error: ''
}

export default scannerReducer = (state = initialState, action) => {
    switch(action.type) {
        case REDEEM_DISCOUNT:
            return {
                ...state,
                loading: true,
                error: '',
            }
            break;
        case REDEEM_DISCOUNT_SUCCESS:
            return {
              ...state,
              loading: false,
              redeemedSuccess: true,
              error: '',
              userInfo: action.userInfo
            }
            break;
        case REDEEM_DISCOUNT_ERROR: 
            return {
              ...state,
              loading: false,
              redeemedSuccess: false,
              error: 'Ocurrió un error, contacta al soporte.'
            }
            break;
        default:
          return state
    }
}
