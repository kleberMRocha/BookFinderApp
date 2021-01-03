import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container, 
    Title, 
    IMG,MyFavorites, 
    ButtonText,
    SearchBooks
} 
from './styles';

import Book from '../../assets/book.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useCallback } from 'react';


const Home:React.FC = () => {

   const HandleGoToSearchPage =  useCallback(() => navigation.navigate('Search'),[]);
   const HandleGoToSeWishListPage =  useCallback(() => navigation.navigate('Wishlist'),[]);

    const navigation = useNavigation();

    return(
        <Container>
                <Title>BookFinder</Title>
                <IMG source={Book} />
                <MyFavorites  >
                    <ButtonText
                        onPress={ () => HandleGoToSeWishListPage()}
                    >
                    <Icon name="star" size={30} color="#ffa90a" />
                    {' '}Wishlist
                    </ButtonText>
                </MyFavorites>
                <SearchBooks>
                    <ButtonText
                        onPress={ () => HandleGoToSearchPage()}
                    >
                    <Icon name="search" size={30} color="#ffffff" />
                     {' '}Search Books
                    </ButtonText>
                </SearchBooks>
        </Container>
    );

};

export default Home;