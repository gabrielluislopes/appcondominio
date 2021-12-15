import * as React from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    Button, 
    ActivityIndicator,
    Alert,
    ScrollView,
    Dimensions
} from 'react-native';
import FormRow from '../components/FormRow';
import MyButton from '../components/MyButton';
import LinearGradient from 'react-native-linear-gradient';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

import { connect } from 'react-redux';

import { processLogin } from '../actions';

class TelaLogin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isLoading: false,
            message: "",
        }
    }

    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyA3RiMoN6mhGqrv4QhuvHhbUsoaX4BSOa8", 
            authDomain: "condominio-b9117.firebaseapp.com", 
            projectId: "condominio-b9117",
            storageBucket: "condominio-b9117.appspot.com",
            messagingSenderId: "130645568446",
            appId: "1:130645568446:web:8ebc23387e60fdbbafe7ef",
            measurementId: "G-GT82GGJ58R",
            databaseURL: "https://condominio-b9117.firebaseapp.com"
        };

        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }else{
            firebase.app();
        }

    }

    onChangeHandler(field, valor) {
        this.setState({
            [field]: valor
        })
    }

    processLogin() {
        this.setState({ isLoading: true });
        const {email, password} = this.state;
        
        this.props.processLogin({email, password})
            .then(user => {
                if(user){
                    this.props.navigation.replace("Menu");
                }
                else{
                    this.setState({
                        isLoading: false,
                        message: "",
                    })
                }
            })
            .catch(error => {
                this.setState({
                    isLoading: false,
                    message: this.getMessageByError(error.code),
                });
            })
    }

    getMessageByError(code) {
        switch(code){
            case "auth/user-not-found":
                return "E-mail inexistente.";
            case "auth/wrong-password":
                return "Senha incorreta.";
            case "auth/invalid-email":
                return "Insira um e-mail válido.";
            default: 
                return "Erro desconhecido.";
        }
    }

    

    renderButton(){
        if(this.state.isLoading)
            return <ActivityIndicator />;


        return(
            <MyButton>
                <Button
                    title='Entrar'
                    color='#4C58F8'
                    onPress={() => this.processLogin()}
                />
            </MyButton>
        );
    }

    renderMessage(){
        const { message } = this.state;

        if(!message)
            return null;

        return(
            <View>
                <Text>{message}</Text>
            </View>
        )
    }

    renderCadastro(){
        return this.props.navigation.navigate('Cadastro');
    }

    render(){
        return(
            <LinearGradient colors={['#55FDF4', '#4C58F8']} style={styles.linearGradient}>
            <ScrollView>
                <Text style={styles.textTitulo}>Condomínio</Text>

                <FormRow>
                    <TextInput
                        style={styles.textInput}
                        placeholder="email@exemplo.com.br"
                        value={this.state.email}
                        onChangeText={valor => {
                            this.onChangeHandler('email', valor)
                        }}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </FormRow>

                <FormRow>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Digite sua senha aqui"
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={valor => {
                            this.onChangeHandler('password', valor)
                        }}
                        autoCapitalize="none"
                    />
                </FormRow>

                {this.renderButton()}

                <MyButton>
                    <Button
                        title='Cadastrar'
                        color='#4C58F8'
                        onPress={() => this.renderCadastro()}
                    />
                </MyButton>

            </ScrollView>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        paddingLeft: 10,
        paddingRight: 10,
    },
    textTitulo: {
        color: 'black',
        fontSize: 50,
        fontFamily: 'roboto',
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 60,
    },
    linearGradient: {
        flex: 1,
        alignContent: 'center',
      },
});

export default connect(null, {processLogin})(TelaLogin);