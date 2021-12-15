import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Principal from '../pages/TelaPrincipal';
import MinhasReservas from '../pages/TelaMinhasReservas';

Icon.loadFont();

const Drawer = createDrawerNavigator();

export default function Menu() {
    return(
        <Drawer.Navigator
            initialRouteName="Início"
            drawerStyle={styles.drawerStyle}
        >
            <Drawer.Screen 
                name="Início"
                component={Principal}
                options={ {drawerIcon: config => <Icon name="home" size={30} color="black" />}}
            />
            <Drawer.Screen 
                name="Minhas reservas"
                component={MinhasReservas}
                options={ {drawerIcon: config => <Icon name="calendar" size={30} color="black" />}}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerStyle: {
        width: 250,
        backgroundColor: '#57FFF4',
    },
    container: {
        alignItems: 'center',
        height: 165,
    },
    imageStyle: {
        width: 100,
        height: 100,
    },
    drawerText: {
        color: 'black',
        fontSize: 18,
    },
    drawerTextSmall: {
        color: 'black',
        fontSize: 12,
    },
    containerText: {
        alignItems: 'center',
    },
    imageContainer: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#DDD',
        elevation: 6,
    }
})