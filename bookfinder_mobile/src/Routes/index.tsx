import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Wishlist from '../pages/Wishlist/Wishlist';

const Routes:React.FC = () => {

const {Navigator, Screen} = createStackNavigator();

    return(
        <NavigationContainer>
            <Navigator>
                <Screen 
                name="Home" 
                component={Home}
                options={{ 
                    title: 'Welcome!',
                    headerStyle: {
                        backgroundColor: '#516cc4',
                      },
                      headerTintColor: '#fff',
                      headerTitleAlign:'center',
                }}
                />
                <Screen 
                name="Search" 
                component={Search}
                options={{ 
                    title: 'Book Search',
                    headerStyle: {
                        backgroundColor: '#516cc4',
                      },
                      headerTintColor: '#fff',
                      headerTitleAlign:'center',
                }}
                />

                <Screen 
                    name="Wishlist" 
                    component={Wishlist}
                    options={{ 
                        title: 'Wishlist',
                        headerStyle: {
                            backgroundColor: '#516cc4',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign:'center',
                    }}
                />
            </Navigator>
            
        </NavigationContainer>
    
    );

};

export default Routes;