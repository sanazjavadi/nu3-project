const CartColumns = () => {
  return (
    <thead className="text-xs text-gray-700 uppercase border border-b-300 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          image
        </th>
        <th scope="col" className="px-6 py-3">
          item
        </th>
        <th scope="col" className="px-6 py-3">
          price
        </th>
        <th scope="col" className="px-6 py-3">
          quantity
        </th>
        <th scope="col" className="px-6 py-3">
          subtotal
        </th>
      </tr>
    </thead>
  );
};

export default CartColumns;
