import React,{ useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorageService from '../../Services/GetAndSetOnLocalStorage';


import {
    Container,
    Text,
    BookImage,
    SeeMore, 
    SeeMoreText, 
    BuyThis,
    BuyThisText,
    AddWishlist,
    WishlistText
} from './styles';


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

export interface BookCardProps {
  setWishlist:Function;
  wishlist:BookCardProps[];
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
};


const Bookcard:React.FC<BookCardProps> = ({book, wishlist,setWishlist}) =>{
            console.log(wishlist);

        const asyncStorageService = new AsyncStorageService();
        const {id,saleInfo,volumeInfo} = book;
        const [seeMore,SetSeeMore] = useState(false); 

        const [isFavorite, setFavorite] = useState(
            (wishlist.some(wishlistItem => wishlistItem.book.id === id))
        );

        const handleAddToWishList = useCallback( async (isFavorite:boolean,setWishlist:Function) =>{

            if(isFavorite){
 
             const filtredWishlist = wishlist.filter(wishlist => wishlist.book.id != id);
             setWishlist(filtredWishlist);
             setFavorite(false);
             await asyncStorageService.setValues(wishlist);
 
            }else{
 
             setWishlist([{book},...wishlist]);
             await asyncStorageService.setValues(wishlist);
             setFavorite(true);
     
            }
    
        },[isFavorite])

        const visibility = seeMore ? 'flex':'none';
        const {thumbnail} = volumeInfo.imageLinks;

        return (
        <Container>
            <Text>{volumeInfo.title}</Text>
             {
                volumeInfo.authors !== undefined && 
                volumeInfo.authors.map(author => <Text key={`${id}_${author}`}>{author}</Text>)
             }
            <Text>{volumeInfo.publishedDate}</Text>
             
                <BookImage source={{uri:thumbnail}} />
        
            <Text style={{display: visibility }}>{volumeInfo.description}</Text>
    
                <SeeMore onPress={()=> SetSeeMore(!seeMore)}>
                    <SeeMoreText> Description - See {seeMore ? 'Less' : 'More' }</SeeMoreText>
                </SeeMore>
        
             {
                saleInfo.saleability !== 'NOT_FOR_SALE' && 
                (<BuyThis onPress={() => Linking.openURL(saleInfo.buyLink)}>
                    <BuyThisText> 
                        {
                            saleInfo.saleability !== 'FREE' 
                            ? 'Buy this book'
                            : 'Free Ebook'
                        }  
                    </BuyThisText>
                </BuyThis>)
             }
            
    
             <AddWishlist onPress={ async () => await handleAddToWishList(isFavorite,setWishlist)}>
                <WishlistText>   
                    <Icon name='heart' size={30} color={isFavorite ?'tomato':'#fff'}/>  
                    {' '}
                    Add to wishlist
                </WishlistText>
             </AddWishlist>
    
    
        </Container>);


};

export default Bookcard;