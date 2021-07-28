import React, {useState, useRef } from "react";
import { BookDescription } from "./BookDescription";
import BookSearchItem from './BookSearchItem';
import { useBookData } from "./useBookData";

type BookSearchDialogProps = {
  maxResults: number;
  onBookAdd: (book: BookDescription) => void;
}

const BookSearchDialog = (props: BookSearchDialogProps) => {

  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const books = useBookData(
    title, author, props.maxResults
  );


  // useRefに変更するのでコメントアウト
  // const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
  //   setTitle(e.target.value);
  // };

  // const handleAuthorInputChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
  //   setAuthor(e.target.value);
  // };

  const handleBookAdd = (book: BookDescription) => {
    props.onBookAdd(book);
  }

  const handleSearchClick = () => {
    if(!titleRef.current!.value && !authorRef.current!.value) {
      alert('zyouken nyuyroku site!')
      return;
    }

    setTitle(titleRef.current!.value);
    setAuthor(authorRef.current!.value);
  }

  const bookItems = books.map((b, index) => {
    return (
      <BookSearchItem
        description={b}
        onBookAdd={(b) => handleBookAdd(b)}
      />
    )
  })

  return (
    <div className="dialog">
      <div className="operation">
        <div className="conditions">
          <input 
            type="text"
            ref={titleRef}
            placeholder="search title"
          />

          <input 
            type="text"
            ref={authorRef}
            placeholder="search author"
          />
        </div>

        <div className="button-like" onClick={handleSearchClick}>
          SEARCH!
        </div>
      </div>

      <div className="search-results">{bookItems}</div>
    </div>
  )
};

export default BookSearchDialog;