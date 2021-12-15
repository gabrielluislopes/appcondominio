import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
}
from 'react-native';

const EspacoCard = ({espaco, noTopo, onNavigate}) => (
    <View style={[styles.container, noTopo ? styles.primeiro : styles.container]}>
        <TouchableOpacity 
            style={styles.card}
            onPress={onNavigate}
        >
            <Image 
                source={
                    {
                        uri: espaco.img
                    }
                }
                aspectRatio={1}
                resizeMode='stretch'
                style={styles.imagemCard}
            />

            <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>{ espaco.nome }</Text>
            </View>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        height: Dimensions.get('window').width/2.5,
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 20
    },
    imagemCard: {
        width: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        margin: 20
    },
    cardTitleContainer: {
        height: 50,
        position: 'absolute',
        bottom: 25,
        left: Dimensions.get('window').width/2.5,
    },
    cardTitle: {
        fontSize: 23,
    },
    primeiro: {
        paddingTop: 20,
    }
});

export default EspacoCard;