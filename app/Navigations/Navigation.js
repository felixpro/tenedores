import React from 'react';
import  { NavigationContainer } from "@react-navigation/native";
import  { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  { Icon } from "react-native-elements";

import RestaurantsStack from './RestaurantsStack';
import FavoritesStack from './FavoritesStack';
import TopRestaurants from './TopRestaurants';
import SearchStack from './SearchStack';
import AccountStack from './AccountSTack';



const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
              initialRouterName="restaurants"
              tabBarOptions={{
                inactiveTintColor: "#646464",
                activeTintColor: "#00a680",
              }}
              screenOptions={({route}) => ({
                tabBarIcon: ({color}) => screenOptions(route, color)
              })}
              >
                <Tab.Screen
                name="restaurants"
                component={RestaurantsStack}
                options={{title: "Restaurantes"}}
                 />
                <Tab.Screen
                name="favorites"
                component={FavoritesStack}
                options={{title: "Favoritos"}}
                />
                 <Tab.Screen
                name="account"
                component={AccountStack}
                options={{title: "Cuenta"}}
                />
                   <Tab.Screen
                name="Top-restaurants"
                component={TopRestaurants}
                options={{title: "Top 5"}}
                />
                   <Tab.Screen
                name="search"
                component={SearchStack}
                options={{title: "Buscar"}}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color){
let iconName;

switch (route.name) {
  case "restaurants":
    iconName = "compass-outline"
    break;
  case "favorites":
    iconName = "heart-outline"
    break;
  case "Top-restaurants":
    iconName = "star-outline"
    break;
    case "search":
      iconName = "magnify"
      break;
      case "account":
        iconName = "home-outline"
        break;
  default:
  break;
}

return (
  <Icon type="material-community" name={iconName} size={22} color={color} />
)
}
