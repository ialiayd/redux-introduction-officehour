import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  // const prices = ahmet.reduce((total, number) => total + number.price, 0);
  const ahmet = useSelector((state) => state.cart);
  const [filterCart, setFilterCart] = useState(ahmet);

  const deleteCart = (id) => {
    const newList = filterCart.filter((filter) => filter.id !== id);

    setFilterCart(newList);
  };

  var total = 0;
  const prices = filterCart.forEach((item) => (total += item.price));

  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>

      <p className="bolder">
        Sepetinizde bu kitaptan toplam {filterCart.length} adet var.
      </p>
      <h3>Toplam Sepet Tutarı: &#8378;{total.toFixed(2)}</h3>
      {filterCart.map((ahmet) => (
        <div className="book" key={ahmet.id}>
          <img src={ahmet.image} alt={ahmet.name} />
          <div>
            <h4>{ahmet.name}</h4>
            <p>{ahmet.author}</p>
            <p>Fiyat: &#8378;{ahmet.price}</p>
            <button onClick={() => deleteCart(ahmet.id)}>Sepetten Çıkar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
