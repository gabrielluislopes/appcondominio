import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderBackground, HeaderTitle } from "@react-navigation/stack";

import TelaLogin from './pages/TelaLogin';
import TelaCadastro from './pages/TelaCadastro';
import TelaPrincipal from './pages/TelaPrincipal';
import TelaFazerReserva from "./pages/TelaFazerReserva";
import TelaMinhasReservas from "./pages/TelaMinhasReservas";
import Menu from './components/Menu';



const Stack = createStackNavigator();

const App = () => {
  return(
    <>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Login" 
            component={TelaLogin} 
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="Menu" 
            component={Menu} 
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="Principal" 
            component={TelaPrincipal} 
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="MinhasReservas" 
            component={TelaMinhasReservas} 
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="Fazer reserva" 
            component={TelaFazerReserva} 
            options={{headerStyle: {backgroundColor: '#55FDF4'}}} 
          />
          <Stack.Screen 
            name="Cadastro" 
            component={TelaCadastro} 
            options={{headerShown: false}} 
          />
        </Stack.Navigator>
      </NavigationContainer>
      
    </>
  )
}

export default App;


//Versão sem drawer navigator

/* import { createAppContainer, createStackNavigator } from "react-navigation";
import TelaLogin from './pages/TelaLogin';
import TelaCadastro from './pages/TelaCadastro';
import TelaPrincipal from './pages/TelaPrincipal';
import TelaFazerReserva from "./pages/TelaFazerReserva";
import TelaMinhasReservas from "./pages/TelaMinhasReservas";

const AppNavigator = createStackNavigator({
  'Login': {
    screen: TelaLogin,
    navigationOptions: {
      title: "Login",
      header: null,
    },
  },
  'Principal': {
    screen: TelaPrincipal,
    navigationOptions: {
        title: "Início",
    }
  },  
  'FazerReserva': {
    screen: TelaFazerReserva,
    navigationOptions: ({navigation}) => {
      const {espaco} = navigation.state.params;
      
      return {
        title: espaco.nome
      }
    }
  },
  'MinhasReservas': {
    screen: TelaMinhasReservas,
    navigationOptions: {
      title: 'Minhas Reservas'
    }
  },
    'Cadastro': {
      screen: TelaCadastro,
      navigationOptions: {
        title: "Cadastro",
        header: null,
      }
    },
  }, {
    defaultNavigationOptions: {
      title: "Condomínio",
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#55FDF4',
        //borderBottomWidth: 1,
        //borderBottomColor: '#c5c5c5',
      },
      headerTitleStyle: {
        color: 'black',
        fontSize: 30,
      }
    }
  });
  
  const AppContainer = createAppContainer(AppNavigator);
  
  export default AppContainer;
 */