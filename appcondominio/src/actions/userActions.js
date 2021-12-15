import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

export const USER_LOGIN_SUCESS = 'USER_LOGIN';
const userLoginSucess = user => ({
    type: USER_LOGIN_SUCESS,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT,
})

export const processLogin = ({email, password}) => dispatch => {
    return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
        const action =  userLoginSucess(user);
        dispatch(action);
        return user;
    })
    .catch(error => {
        if(error.code == "auth/user-not-found"){
            return new Promise((resolve, reject) => {
                Alert.alert(
                    "Erro!",
                    "Usuário não encontrado!"
                );
                resolve();
            })
        }
        if(error.code == "auth/wrong-password"){
            return new Promise((resolve, reject) => {
                Alert.alert(
                    "Erro!",
                    "Senha incorreta!"
                );
                resolve();
            })
        }
        if(error.code == "auth/invalid-email"){
            return new Promise((resolve, reject) => {
                Alert.alert(
                    "Erro!",
                    "Insira um e-mail válido!"
                );
                resolve();
            })
        }
        return Promise.reject(error);
    })
}