import React from "react";
import useCard from "../../hooks/useCard";
import "./index.css";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Basket = () => {
  const { totalItemsCount } = useCard();
  return (
    <div
      className="basket-container flex items-center"
      data-testid="basket-container"
    >
      <span className="basket-count-badge">{totalItemsCount}</span>
      <HiOutlineShoppingBag />
    </div>
  );
};

export default Basket;
