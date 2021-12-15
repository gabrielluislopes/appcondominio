import React from 'react';
import {
  StyleSheet, 
  ScrollView, 
  Text, 
  FlatList, 
  Image, 
  Dimensions,
  Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ReservaCard from '../components/ReservaCard';
import CardVazio from '../components/CardVazio';
import { connect } from 'react-redux';
import { watchReservas } from '../actions/reservasAction';
import HeaderDrawNav from '../components/HeaderDrawNav';


const noTopo = number => number === 0;

class TelaMinhasReservas extends React.Component{

  componentDidMount() {
    this.props.watchReservas();
  }

  render() {
    return (
      <LinearGradient colors={['#55FDF4', '#4C58F8']} style={styles.linearGradient}>
      <HeaderDrawNav title="Minhas reservas" navigation={this.props.navigation}/>
      <ScrollView>
      <Image 
        source={
            {
                uri: 'https://pics.freeicons.io/uploads/icons/png/18661471221608672866-512.png'
            }
        }
        aspectRatio={1}
        resizeMode='stretch'
        style={styles.imagemCard}
      />
      
        {
          this.props.reservas === null ?
          <CardVazio onNavigate={() => this.props.navigation.replace("Principal")}/>
          :
          <FlatList
            data={[...this.props.reservas]}
            renderItem={({item, index}) => {
              return (
                <ReservaCard 
                  reserva={item}
                  noTopo={noTopo(index)}
                />
              );
            }}
            keyExtractor={item => item.id}
            numColumns={1}
          />
        }

      </ScrollView>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignContent: 'center',
  },
  imagemCard: {
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').width/3,
    marginTop: 42,
    marginLeft: Dimensions.get('window').width/3,
    marginBottom: 30,
  },
})

const mapStateToProps = state => {
  const {listaReservas} = state;

  if(listaReservas ===null){
    return {reservas: listaReservas};
  }

  const keys = Object.keys(listaReservas);
  const listaReservasWithId = keys.map(key => {
    return { ...listaReservas[key], id: key}
  })
  return{reservas : listaReservasWithId};
}


export default connect(mapStateToProps, {watchReservas})(TelaMinhasReservas);