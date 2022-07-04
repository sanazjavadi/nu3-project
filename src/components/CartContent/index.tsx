import useCard from "../../hooks/useCard";

//components
import CartItem from "./CartItem";
import CartColumns from "./CartColumns";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { items } = useCard();
  return (
    <div
      className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto"
      style={{ maxWidth: "1200px" }}
    >
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <CartColumns />
        <tbody>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </tbody>
      </table>
      <CartTotals />
    </div>
  );
};

export default CartContent;
