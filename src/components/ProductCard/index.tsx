/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import useCard from "src/hooks/useCard";
import { IProductCard } from "./ProductCard";
import Button from "../Button";
import { formatPrice } from "src/utils/formatPrice";

const ProductCard: React.FC<IProductCard.IProps> = ({
  title,
  vendor,
  price,
  image,
  link,
  id,
}) => {
  const { addItem } = useCard();
  return (
    <div
      data-testid="product-cart-container"
      className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-sm sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 m-2"
    >
      <img className="p-8 rounded-t-lg" src={image} alt="product image" />

      <div className="px-5 pb-5">
        <Link to="/product-detail-page">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white h-16">
            {title}
          </h5>
        </Link>

        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {formatPrice(price)}
          </span>
          <Button
            id={id}
            handleClick={() =>
              addItem({
                qty: 1,
                id,
                price,
                title,
                vendor,
                link,
                image,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  title: "text",
  className: "",
};

export default ProductCard;
