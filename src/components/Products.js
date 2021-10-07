import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { sepeteEkle } from "../actions";

const Products = () => {
  const kitapListesi = useSelector((state) => state.bookList);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {kitapListesi.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar:{book.author}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button onClick={() => dispatch(sepeteEkle(book))}>
              Sepete Ekle
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
