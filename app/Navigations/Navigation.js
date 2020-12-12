import React from 'react';
import  { NavigationContainer } from "@react-navigation/native";
import  { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantsStack from './RestaurantsStack';
import FavoritesStack from './FavoritesStack';
import TopRestaurants from './TopRestaurants';
import SearchStack from './SearchStack';
import AccountStack from './AccountSTack';



const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
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
