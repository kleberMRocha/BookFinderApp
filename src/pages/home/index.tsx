import React, { useCallback, useEffect, useState } from 'react';
import Title from '../../components/Title';
import Figure from '../../components/Figure';
import { BookContainer, Container, Footer, FormGroup, Error } from './styles/style';
import Input from '../../components/Input';
import ImgFigure from '../../assets/home.svg';
import BookCard from '../../components/BookCard/index';

import api from '../../api/axios';
import NavBar from '../../components/NavBar';

interface BooksProps {
  id: string;
  volumeInfo: {
    title: string;
    authors:string[];
    publishedDate:string;
    description:string;
    publisher:string;
    imageLinks:{
      thumbnail:string;
    }
  };
  saleInfo:{
    saleability:string;
    buyLink:string;
  };
}

const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState<BooksProps[]>([]);

  const handleGetBooks = useCallback(() => {
    const ApiKey = 'AIzaSyB-BokJ4vlHVVqtrS9vYD6FqNXnUz3dldg';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${ApiKey}`;
    api.get(url).then((response) => {
      if(response.status === 200){
        setBooks(response.data.items);
        return;
      }
     
    });
  }, [search]);

  useEffect(() => {
    if (search.length === 0) return;
    handleGetBooks();
  }, [search, handleGetBooks]);

  return (
    <>
      <NavBar />
      <Container>
        <FormGroup>
          <Title content='Book finder' />
          <Input callback={setSearch} />
            <Error>
              {
                books === undefined 
                && <p>'Sorry, We havent found any books with that title'</p>
              }
            </Error>
        </FormGroup>
        <Figure alt='Book finder' src={ImgFigure} />
      </Container>
        <BookContainer id='searchResult'>
          {!!books && books.map((book) => {
            return <BookCard key={book.id} book={book}/>;
          })}
          <div>
          <Footer>
            <p>made with ❤️ by <a href="https://github.com/kleberMRocha">Kleber</a></p> 
          </Footer>
          </div>
        </BookContainer>
    
    </>
  );
};

export default App;
