import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useContext } from 'react';

// Importando os contextos
import { LanguageProvider, LanguageContext } from '../assets/utils/LanguageContext';
import { FontSizeProvider, FontSizeContext } from '../assets/utils/FontSizeContext';

// Screens
import HomeScreen from './screens/HomeScreen';
import DicasScreen from './screens/DicasScreen';
import DiabetesScreen from './screens/DiabetesScreen';
import DoencasScreen from './screens/DoencasScreen';
import CuidadosScreen from './screens/CuidadosScreen';
import Definicao1 from './subscreens/diabetes/Definicao1'; 
import Kind2 from './subscreens/diabetes/Kind2';
import Bucal3 from './subscreens/diabetes/Bucal3';
import SettingsScreen from './screens/SettingsScreen';

// Função para obter os nomes das telas
const getScreenNames = (language) => ({
  homeName: language === 'pt' ? 'Início' : 'Home',
  diabetesName: language === 'pt' ? 'Diabetes' : 'Diabetes',
  doencasName: language === 'pt' ? 'Doenças' : 'Diseases',
  dicasName: language === 'pt' ? 'Dicas' : 'Tips',
  cuidadosName: language === 'pt' ? 'Cuidados' : 'Care',
});

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  const { language } = useContext(LanguageContext);
  const { homeName, diabetesName, doencasName, dicasName, cuidadosName } = getScreenNames(language);

  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent;

          if (route.name === homeName) {
            iconName = 'home';
            IconComponent = Ionicons;

          } else if (route.name === diabetesName) {
            iconName = 'fitness';
            IconComponent = Ionicons;

          } else if (route.name === doencasName) {
            iconName = 'ambulance';
            IconComponent = MaterialCommunityIcons;

          } else if (route.name === cuidadosName) {
            iconName = 'list';
            IconComponent = Ionicons;

          } else if (route.name === dicasName) {
            iconName = 'lightbulb-on-outline';
            IconComponent = MaterialCommunityIcons;
          }

          return IconComponent ? <IconComponent name={iconName} size={size} color={color} /> : null;

        },
        tabBarActiveTintColor: '#003479',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          paddingBottom: 10,
          fontSize: 10,
        },
        tabBarStyle: {
          padding: 10,
          height: 70,
        },
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name={diabetesName} component={DiabetesScreen} options={{ headerShown: false }} />
      <Tab.Screen name={doencasName} component={DoencasScreen} options={{ headerShown: false }} />
      <Tab.Screen name={cuidadosName} component={CuidadosScreen} options={{ headerShown: false }} />
      <Tab.Screen name={dicasName} component={DicasScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function MainContainer() {
  return (
    <LanguageProvider>
      <FontSizeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Definicao1" component={Definicao1} options={{ headerShown: false }} />
            <Stack.Screen name="Kind2" component={Kind2} options={{ headerShown: false }} />
            <Stack.Screen name="Bucal3" component={Bucal3} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </FontSizeProvider>
    </LanguageProvider>
  );
}
