import useCard from "../../hooks/useCard";
import CartContent from "../../components/CartContent";

const Checkout: React.FC = (): JSX.Element => {
  const { totalItemsCount } = useCard();
  if (totalItemsCount < 1) {
    return (
      <main className="flex flex-col justify-center items-center w-full h-screen">
        <img
          height={50}
          width={50}
          src="https://img.icons8.com/dusk/452/shopping-basket-2.png"
          alt=""
        />
        <h2 className="w-75 h-75 mt-5 font-xl text-gray-700 bold">
          Your Cart Is Empty
        </h2>
      </main>
    );
  }

  return (
    <main>
      <main className="page">
        <CartContent />
      </main>
    </main>
  );
};

export default Checkout;
