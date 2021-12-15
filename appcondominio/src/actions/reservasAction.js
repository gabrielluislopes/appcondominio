import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { Alert } from 'react-native';

export const SET_RESERVAS = 'SET_RESERVAS';
const setReservas = reservas => ({
    type: SET_RESERVAS,
    reservas: reservas
})

export const DELETE_SUCCESS = 'DELETE_SUCCESS';
const deleteSuccess = () => ({
    type: DELETE_SUCCESS,
})

export const watchReservas = () => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        firebase
        .app()
        .database('https://condominio-b9117-default-rtdb.firebaseio.com/')
        .ref(`/users/${currentUser.uid}/reservas`)
        .on('value', snapshot => {
            const reservas = snapshot.val();
            const action = setReservas(reservas);
            dispatch(action);
        })
    }
}

export const deleteReserva = reserva => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            Alert.alert(
                'Cancelar',
                'Deseja realmente cancelar sua reserva?',
                [{
                    text: 'Não',
                    onPress: () => {
                        resolve(false);
                    },
                    style: 'cancel'
                },{
                    text: 'Sim',
                    onPress: async () => {
                        const { currentUser } = firebase.auth();

                        try{
                            await firebase
                            .app()
                            .database('https://condominio-b9117-default-rtdb.firebaseio.com/')
                            .ref(`/users/${currentUser.uid}/reservas/${reserva.id}`)
                            .remove();

                            resolve(true);
                        }
                        catch (e) {
                            reject(e);
                        }
                    }
                }],
                {cancelable: false}
            )
        })
    }
}