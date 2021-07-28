import React from "react";
import { BookToRead } from "./BookToRead";

type BookRowProps = {
  book: BookToRead;

  // 変更よう
  onMemoChange: (id: number, memo: string) => void;
  // 削除用
  onDelete: (id: number) => void;
}

const BookRow = (props: BookRowProps) => {
  const { id, title, authors, memo } = props.book;

  const handleMemoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onMemoChange(props.book.id, e.target.value);
  }

  const handleDeleteClick = () => {
    props.onDelete(props.book.id);
  };

  return (
    <div className='book-row'>
      <div id={ String(id) } className="id">
        {id}
      </div>
      <div title={title} className="title">
        {title}
      </div>
      <div title={authors} className="authors">
        {authors}
      </div>
      <input
        type="text"
        className="memo"
        value={memo}
        onChange={handleMemoChange}
      />
      <div className="delete-row" onClick={handleDeleteClick}>
        削除
      </div>
    </div>
  );
};

export default BookRow;