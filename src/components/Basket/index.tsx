import React from "react";
import useCard from "../../hooks/useCard";
import "./index.css";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Basket = () => {
  const { totalItemsCount } = useCard();
  return (
    // this should be a link to shopping card page
    <div className="basket-container flex items-center">
      <span className="basket-count-badge">{totalItemsCount}</span>
      <HiOutlineShoppingBag />
    </div>
  );
};

export default Basket;
