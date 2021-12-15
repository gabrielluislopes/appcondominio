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

const CardVazio = ({noTopo, onNavigate}) => (
    <View style={[styles.container, noTopo ? styles.primeiro : styles.container]}>
        <View style={styles.card}>
            <Image 
                source={
                    {
                        uri: 'https://pics.freeicons.io/uploads/icons/png/4177409791543238955-512.png'
                    }
                }
                aspectRatio={1}
                resizeMode='stretch'
                style={styles.imagemCard}
            />

            <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>Você não tem reservas!</Text>
            </View>

            <View style={styles.botao}>
                <Button 
                    title='Fazer reserva'
                    color='#4C58F8'
                    onPress={onNavigate}
                />
            </View>
        </View>
    </View>
);

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
        marginTop: Dimensions.get('window').width/7,
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

export default CardVazio;