import { combineReducers } from 'redux';
import newReservaForm from './newReservaForm';
import userReducer from './userReducer';
import reservaReducer from './reservaReducer';

export default combineReducers({
  user: userReducer,
  reservaForm: newReservaForm,
  listaReservas: reservaReducer
});