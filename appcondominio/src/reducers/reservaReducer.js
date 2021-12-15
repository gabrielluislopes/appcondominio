import { SET_RESERVAS, DELETE_SUCCESS } from "../actions/reservasAction";

export default function(state = null, action){
    switch(action.type){
        case SET_RESERVAS:
            return action.reservas;
        case DELETE_SUCCESS:
            return null;
        default:
            return state;
    }
}