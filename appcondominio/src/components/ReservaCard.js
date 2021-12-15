import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    Button
}
from 'react-native';
import { connect } from "react-redux";
import { deleteReserva } from '../actions/'

class ReservaCard extends React.Component {
    render() {
        const {reserva, noTopo} = this.props;

        return (
            <View style={[styles.container, noTopo ? styles.primeiro : styles.container]}>
                <View style={styles.card}>
                    <Image 
                        source={
                            {
                                uri: 'https://pics.freeicons.io/uploads/icons/png/1114591141536572527-512.png'
                            }
                        }
                        aspectRatio={1}
                        resizeMode='stretch'
                        style={styles.imagemCard}
                    />

                    <View style={styles.cardTitleContainer}>
                        <Text style={styles.cardTitle}>Espaço: { reserva.espaco }</Text>
                        <Text style={styles.cardTitle}>Data: { reserva.data }</Text>
                        <Text style={styles.cardTitle}>Horário: { reserva.horario }</Text>
                    </View>

                    <View style={styles.botao}>
                        <Button 
                            title='Cancelar'
                            color='#FF6464'
                            onPress={async () => {
                                const hasDeleted = await this.props.deleteReserva(reserva)
            
                                if(hasDeleted) {
                                    console.log("funcionou");
                                }
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        height: Dimensions.get('window').width/2,
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    imagemCard: {
        width: Dimensions.get('window').width/4,
        height: Dimensions.get('window').width/4,
        marginTop: 20,
        marginLeft: 20
    },
    cardTitleContainer: {
        position: 'absolute',
        left: Dimensions.get('window').width/2.5,
        marginTop: Dimensions.get('window').width/10,
    },
    cardTitle: {
        fontSize: 15,
    },
    primeiro: {
        paddingTop: 20,
    },
    botao: {
        flex: 1,
        width: Dimensions.get('window').width-60,
        position: 'absolute',
        bottom: 10,
        marginLeft: 10,
        marginRight: 10,
        
    },
});

export default connect(null, {deleteReserva})(ReservaCard);