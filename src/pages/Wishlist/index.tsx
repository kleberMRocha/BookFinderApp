import React, { useState } from "react";
import { Container, TitleGroup, WishListContainer } from "./styles/style";
import NavBar from "../../components/NavBar";
import BookCard from "../../components/BookCard";
import WishListImg from '../../assets/book.svg';
import Footer from "../../components/Footer";

interface BookCardProps {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publishedDate: string;
    description: string;
    publisher: string;
    imageLinks: {
      thumbnail: string;
    };
  };
  saleInfo: {
    saleability: string;
    buyLink: string;
  };
}

const WishList: React.FC = () => {
  const [wishList] = useState<BookCardProps[]>(() => {
    const localStorageItem: any = localStorage.getItem("@BookFinderWeb");
    const localStorangeItemParsed = JSON.parse(localStorageItem);
    localStorangeItemParsed.shift();

    return localStorangeItemParsed;
  });

  return (
    <Container>
      <NavBar />

      <TitleGroup>
        <h1>Wishlist</h1>
        <img src={WishListImg} width={200} alt="WishList"/>

        <h1>{wishList.length === 0 ? "No wishlist items yet " : 'Your wishlist !'}</h1>
      </TitleGroup>

      
        <WishListContainer>

        {wishList.map((book) => (
                <BookCard book={book} key={book.id} />
            ))}

        </WishListContainer>
            
          <Footer />

    </Container>
  );
};

export default WishList;
