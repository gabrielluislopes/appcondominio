import * as React from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    Button, 
    ActivityIndicator,
    Alert,
    ScrollView
} from 'react-native';
import FormRow from '../components/FormRow';
import MyButton from '../components/MyButton';
import LinearGradient from 'react-native-linear-gradient';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export default class TelaCadastro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isLoading: false,
            message: "",
        }
    }

    onChangeHandler(field, valor) {
        this.setState({
            [field]: valor
        })
    }

    processoCadastro() {
        this.setState({ isLoading: true });

        const {email, password} = this.state;

        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
            this.setState({ message: "Cadastro realizado com sucesso!"});
            Alert.alert(
                "Sucesso!",
                "Seu cadastro foi realizado! Clique em OK para continuar",
                [{
                    text: 'OK',
                    onPress: () => { this.renderVoltarLogin() }
                }],
                { cancelable: true }
            )
        })
        .catch( error => {
            console.log(error.code);
            if(error.code == "auth/email-already-in-use")
                Alert.alert(
                    "Erro!",
                    "Usuário já cadastrado!"
                );
            if(error.code == "auth/weak-password")
                Alert.alert(
                    "Senha fraca!",
                    "Sua senha deve conter no mínimo 6 caracteres"
                )
            this.setState({ message: this.getMessageByError(error.code)});
        })
        .then( () => {
            this.setState({ isLoading: false });
        })

    }

    getMessageByError(code) {
        switch(code){
            case "auth/email-already-in-use":
                return "E-mail já cadastrado";
            default: 
                return code;
        }
    }

    renderVoltarLogin(){
        return this.props.navigation.navigate("Login");
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

    renderButton(){
        if(this.state.isLoading)
            return <ActivityIndicator />;


        return(
            <MyButton>
                <Button
                    title='Cadastrar'
                    color='#4C58F8'
                    onPress={() => this.processoCadastro()}
                />
            </MyButton>
        );
    }

    render(){
        return(
            <LinearGradient colors={['#55FDF4', '#4C58F8']} style={styles.linearGradient}>
            <ScrollView>
                <Text style={styles.textTitulo}>Cadastrar</Text>

                <FormRow>
                    <TextInput
                        style={styles.textInput}
                        placeholder="E-mail"
                        value={this.state.email}
                        onChangeText={valor => {
                            this.onChangeHandler('email', valor)
                        }}
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />
                </FormRow>

                <FormRow>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Senha"
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={valor => {
                            this.onChangeHandler('password', valor)
                        }}
                        autoCapitalize='none'
                    />
                </FormRow>

                {this.renderButton()}

                <MyButton style={styles.botaoVoltar}>
                    <Button
                        title='Voltar'
                        color='#4C58F8'
                        //color='#28008f'
                        onPress={() => this.renderVoltarLogin()}
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
    botaoVoltar: {
        marginBottom: 50,
    }
});