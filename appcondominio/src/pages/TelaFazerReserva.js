import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Dimensions, 
    ScrollView, 
    TextInput,
    Button,
    ActivityIndicator,
    Alert,
    Picker,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import FormRow from '../components/FormRow';
import { connect } from "react-redux";
import { setField, saveReserva } from "../actions";
import MyButton from '../components/MyButton';
import DatePicker from "react-native-datepicker";


class TelaFazerReserva extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            dia: new Date().getDate(),
            mes: new Date().getMonth() + 1,
            ano: new Date().getFullYear()
        }
    }
    
    componentDidMount() {
        /* this.props.setField('espaco', this.props.navigation.state.params.espaco.nome) */
        this.props.setField('espaco', this.props.route.params.espaco.nome);

        this.props.setField('data', this.state.dia+"/"+this.state.mes+"/"+this.state.ano);
    }

    changeDate = (valor) => {
        this.props.setField('data', valor);
    }

    
    render() {
        /* const {espaco} = this.props.navigation.state.params; */
        const {espaco} = this.props.route.params;
        const { reservaForm, setField, saveReserva, navigation } = this.props;

        return (
            <LinearGradient colors={['#55FDF4', '#4C58F8']} style={styles.linearGradient}>
            <ScrollView style={styles.container}>
                <Image 
                    source={{
                        uri: espaco.img
                    }}
                    style={styles.image}
                />

                <Text style={styles.titulo}>{espaco.nome}</Text>

                <FormRow>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Nome:"
                        value={reservaForm.nome}
                        onChangeText={value => setField('nome', value)}
                    />
                </FormRow>

                <DatePicker 
                    format="DD/MM/YYYY"
                    style={styles.data}
                    date={reservaForm.data}
                    onDateChange={this.changeDate}
                />

                <FormRow>
                    <Picker
                        selectedValue={reservaForm.horario}
                        onValueChange={(itemValue) => setField('horario', itemValue)}
                    >
                        <Picker.Item label="Manhã (08:00 às 12:00)" value="Manhã" />
                        <Picker.Item label="Tarde (12:00 às 18:00)" value="Tarde" />
                        <Picker.Item label="Noite (18:00 às 22:00)" value="Noite" />
                    </Picker>
                </FormRow>

                {
                    this.state.isLoading ? 
                    <ActivityIndicator />
                    :
                    <MyButton>
                        <Button 
                            title='Reservar'
                            color='#4C58F8'
                            onPress={async () => {
                                this.setState({isLoading: true})
                                try{
                                    await saveReserva(reservaForm);
                                    /* navigation.navigate("MinhasReservas"); */
                                    navigation.goBack();
                                }
                                catch(error) {
                                    Alert.alert('Erro', error.message);
                                }
                                finally{
                                    this.setState({isLoading: false})
                                }
                            }}
                        /> 
                    </MyButton>
                }

            </ScrollView>
            </LinearGradient>
        );
    }
}


const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      alignContent: 'center',
    },
    image: {
        aspectRatio: 1,
        width: Dimensions.get('window').width/3,
        height: Dimensions.get('window').width/3,
        margin: Dimensions.get('window').width/3,
        marginTop: 50,
        marginBottom: 25,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    titulo: {
        textAlign: 'center',
        fontSize: 30,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        paddingLeft: 10,
        paddingRight: 10,
    },
    data: {
        width: Dimensions.get('window').width - 70,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 35,
        marginRight: 35,
    },
    textoData: {
        width: Dimensions.get('window').width - 70,
        marginLeft: 35,
        marginRight: 35,
        textAlign: 'center',
    },
});

const mapStateToProps = (state) => {
    return({
        reservaForm: state.reservaForm
    });
}

const mapDispatchToProps = {
    setField,
    saveReserva
}

export default connect(mapStateToProps, mapDispatchToProps)(TelaFazerReserva);