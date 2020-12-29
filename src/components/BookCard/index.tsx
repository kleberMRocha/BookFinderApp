import React from "react";
import { Container } from "./style";

interface BookCardProps {
  book: {
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
  };
}

const BookCard: React.FC<BookCardProps> = (Props) => {
  const { id, volumeInfo, saleInfo } = Props.book;

  return (
    <Container>
      <strong>{volumeInfo.title}</strong>
      <span>{volumeInfo.publishedDate}</span>
      <span>{volumeInfo.publisher}</span>

      {volumeInfo.authors !== undefined &&
        volumeInfo.authors.map((author) => {
          return <p key={`${author}_${id}`}>{author}</p>;
        })}
      {volumeInfo.imageLinks !== undefined && (
        <img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} />
      )}
      <div className="description">
        <p>{volumeInfo.description !== undefined && volumeInfo.description}</p>
      </div>
      <a
        target="blank"
        rel="noopener"
        href={
          saleInfo.saleability === "FOR_SALE"
            ? saleInfo.buyLink
            : `https://www.amazon.com.br/s?k=${volumeInfo.title}`
        }
        style={
          saleInfo.saleability === "FOR_SALE"
            ? undefined
            : { background: "#E67A00" }
        }
      >
        {saleInfo.saleability === "FOR_SALE" ? "Buy on google Play." : "Buy on amazon"}
      </a>
    </Container>
  );
};

export default BookCard;
