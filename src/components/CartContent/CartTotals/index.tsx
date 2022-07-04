import { formatPrice } from "../../../utils/formatPrice";
import useCard from "../../../hooks/useCard";

const CartTotals = () => {
  const { totalItemsAmount } = useCard();
  const shippingFee = 35;
  const { clearCart } = useCard();
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 justify-between w-full">
      <div className="md:flex md:justify-between items-center">
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <span className="mb-3 mr-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              subtotal:
            </span>
            <span className="text-gray-600 text-md">
              {formatPrice(totalItemsAmount)}
            </span>
          </div>
          <div>
            <span className="mb-3 mr-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              shipping fee :
            </span>
            <span className="text-gray-600 text-md">
              {formatPrice(shippingFee)}
            </span>
          </div>
          <div>
            <span className="mb-3 mr-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              order total :
            </span>
            <span className="text-gray-600 text-md">
              {" "}
              {formatPrice(totalItemsAmount + shippingFee)}
            </span>
          </div>
        </div>
        <div className="w-50">
          <button
            onClick={clearCart}
            type="button"
            className="inline-block w-auto h-10  px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out ml-auto"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </footer>
  );
};

export default CartTotals;
