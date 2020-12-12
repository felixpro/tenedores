import React from 'react';
import  { createStackNavigator } from "@react-navigation/stack";
import  FavoritesStack from "../screens/Favorites";

const Stack = createStackNavigator();

export default function RestaurantStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen
         name="favorites"
         component={FavoritesStack}
         options={{title: "Favorites  "}}
      />
    </Stack.Navigator>
  )
}
