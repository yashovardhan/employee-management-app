import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_FORM_RESET
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
        // action.payload === { prop: 'name', value: 'jane' }
      return { ...state, [action.payload.prop]: action.payload.value };

    case EMPLOYEE_FORM_RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
};
