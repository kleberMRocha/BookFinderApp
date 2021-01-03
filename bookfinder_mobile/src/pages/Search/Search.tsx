import React from 'react';
import {
    IMG,
    Container,
    SearchBooks, 
    InputSearch,
    ContainerInput,
    TitleText

} from './style';

import BookFinder from '../../assets/home.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from 'axios';
import BookCard from '../../componenets/bookCard/index';
import AsyncStorageService from '../../Services/GetAndSetOnLocalStorage';


import { useState } from 'react';
import { useCallback } from 'react';
import { ActivityIndicator } from 'react-native';

interface BookCard {
      id: string;
      volumeInfo: {
        title: string;
        authors: string[];
        publishedDate: string;
        description: string;
        publisher: string;
        imageLinks: {
          thumbnail: string;
          smallThumbnail:string;
        };
      };
      saleInfo: {
        saleability: string;
        buyLink: string;
      };
 };

 interface BookCardProps {
    callBack:Function;
    isFavorite:boolean;
    book:{
        id: string;
        volumeInfo: {
          title: string;
          authors: string[];
          publishedDate: string;
          description: string;
          publisher: string;
          imageLinks: {
            thumbnail: string;
            smallThumbnail:string;
          };
        };
        saleInfo: {
          saleability: string;
          buyLink: string;
        };
    };
}



const Search:React.FC = () => {
    const asyncStorageService = new AsyncStorageService();

    const [searchValue,setSearchValue] = useState('');
    const [books,setBooks] = useState<BookCard[]>([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

     const [wishlist,setWishlist] = useState<BookCardProps[]> ([]);

        const [isFavorite, setFavorite] = useState(
            (wishlist.some(wishlistItem => wishlistItem.book.id === id))
        );


       async function handleAddToWishList(isFavorite:boolean){

           if(!isFavorite){

                const filtredWishlist = wishlist.filter(wishlist => wishlist.book.id != id);
                setWishlist(filtredWishlist);
                setFavorite(!isFavorite);
                await asyncStorageService.setValues(wishlist);

           }else{

                setWishlist([{book},...wishlist]);
                await  asyncStorageService.setValues(wishlist);
                setFavorite(!isFavorite);

           }

        }

    const handleSetSearchValue = useCallback( async (text) => setSearchValue(text),[]);
    
    const handleGetValueFromApi = useCallback( async (searchValue) =>{

        const apiKey = 'AIzaSyB-BokJ4vlHVVqtrS9vYD6FqNXnUz3dldg';
        let url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=${apiKey}`;
        
        if(!searchValue){
            setError('This field cannot be empty');
            return;
        } else setError('');
        
        setLoading(true);
        const response = await api.get(url);
        if(response.status != 200){
            setError('Book not found');
            setLoading(false);
            return;
        }

        setBooks(response.data.items);
    
        setLoading(false);
        
    },[searchValue]);

   
    return(
        <Container contentContainerStyle={{ padding: 10, alignItems:'center' }}>
                <TitleText>Book finder</TitleText>
                <IMG source={BookFinder} />
                <ContainerInput>
                <Icon name="search" size={30} color="#485da3" />
                    <InputSearch 
                        value={searchValue}
                        onChangeText={ async(text) => await handleSetSearchValue(text)}
                    />
                </ContainerInput>
                <SearchBooks onPress={async() => await handleGetValueFromApi(searchValue)}> 
                    <TitleText>
                        Search
                    </TitleText>
                </SearchBooks>
                {error.length > 0 && 
                 <TitleText style={{color:'#ffc6d0', fontSize:20}}> {error} </TitleText>}

                    {
                        loading === true 
                        && <ActivityIndicator 
                            size="large" 
                            color="#fff" 
                            style={{margin:20}}
                        />
                    }

                    {
                       (books != undefined && books.length > 0) 
                       && books.map((book,index) => <BookCard  book={book} key={book.id}/>) 
                    }

                    {
                        (books == undefined) &&
                        <TitleText style={{color:'#ffc6d0', fontSize:20}}> 
                            We don't find any book with this title 
                        </TitleText>
                    }

             
                       
               
        </Container>
    );

};



export default Search;