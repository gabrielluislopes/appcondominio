import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const SET_FIELD = 'SET_FIELD';

export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }
}

export const RESERVA_SAVED_SUCCES = 'RESERVA_SAVED_SUCCESS';
export const reservaSavedSuccess = () => {
    return {
        type: RESERVA_SAVED_SUCCES
    }
}


export const saveReserva = reserva => {
    const {currentUser} = firebase.auth();

    const db = firebase
                .app()
                .database('https://condominio-b9117-default-rtdb.firebaseio.com/')
                .ref(`/users/${currentUser.uid}/reservas`);

    return async dispatch => {
        await db.push().set(reserva);

        dispatch(reservaSavedSuccess());

    }
}