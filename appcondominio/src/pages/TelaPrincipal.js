import React from 'react';
import {StyleSheet, View, Text, FlatList, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import espacos from '../../espacos.json';
import EspacoCard from '../components/EspacoCard';
import HeaderDrawNav from '../components/HeaderDrawNav';

const noTopo = number => number === 0;

const TelaPrincipal = props => (
  <LinearGradient colors={['#55FDF4', '#4C58F8']} style={styles.linearGradient}>
  <HeaderDrawNav title="Início" navigation={props.navigation} />
  <ScrollView>
    <FlatList
      data={espacos}
      renderItem={({item, index}) => {
        return (
          <EspacoCard 
            espaco={item}
            noTopo={noTopo(index)}
            onNavigate={() => {
              props.navigation.navigate("Fazer reserva", {espaco: item})
            }}
          />
        );
      }}
      keyExtractor={item => item.id.toString()}
      numColumns={1}
    />
  </ScrollView>
  </LinearGradient>

  
)

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignContent: 'center',
  },
})

export default TelaPrincipal;