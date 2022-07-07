const CartColumns = () => {
  return (
    <thead
      data-testid="cart-columns-container"
      className="text-xs text-gray-700 uppercase border border-b-300 bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
        <th data-testid="image-column-header" scope="col" className="px-6 py-3">
          image
        </th>
        <th data-testid="item-column-header" scope="col" className="px-6 py-3">
          item
        </th>
        <th data-testid="price-column-header" scope="col" className="px-6 py-3">
          price
        </th>
        <th
          data-testid="quantity-column-header"
          scope="col"
          className="px-6 py-3"
        >
          quantity
        </th>
        <th
          data-testid="subtotal-column-header"
          scope="col"
          className="px-6 py-3"
        >
          subtotal
        </th>
      </tr>
    </thead>
  );
};

export default CartColumns;
