import React from 'react';

import {Container} from './style';

import BookCard from '../../componenets/bookCard/index';
import {useEffect} from 'react';
import {useState} from 'react';
import AsyncStorageService from '../../Services/GetAndSetOnLocalStorage';
import { Text } from '../../componenets/bookCard/styles';

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<any[]>([]);
  const asyncStorageService = new AsyncStorageService();

  useEffect(() => {
    const wishListItens = asyncStorageService.getValue();


    wishListItens.then((value) => {
      if (value === null) {
        return;
      }

      setWishlist(value);
    });
  }, []);

  return (
    <Container>
     <Text>{wishlist.length} Books - wishlist </Text>

     {wishlist.length > 0 && wishlist.map(value => {
          return <BookCard 
            book={value.book} 
            wishlist={wishlist} 
            setWishlist={setWishlist}
          />
     })}
       
    </Container>
  );
};

export default Wishlist;
