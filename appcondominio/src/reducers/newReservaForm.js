import { SET_FIELD, RESERVA_SAVED_SUCCES } from "../actions";

const INITIAL_STATE = {
    id: null,
    espaco: '',
    nome: '',
    data: '',
    horario: 'Manhã'
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case SET_FIELD:
            const clonedState = {...state};
            clonedState[action.field] = action.value;
            return clonedState;
        case RESERVA_SAVED_SUCCES:
            return INITIAL_STATE;
        default:
            return state;
    }
}