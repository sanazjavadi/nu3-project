import useCard from "../../hooks/useCard";
import CartContent from "../../components/CartContent";

const Checkout: React.FC = (): JSX.Element => {
  const { totalItemsCount } = useCard();
  if (totalItemsCount < 1) {
    return (
      <main className="flex justify-center h-50">
        <h2>Your Cart Is Empty</h2>
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
