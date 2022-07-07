import "./index.css";
import useCard from "../../hooks/useCard";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

//interfaces
import { IButton } from "./Button";

const Button: React.FC<IButton.IProps> = ({ id, handleClick, type }) => {
  const { updateItemQty, getItemQty } = useCard();
  const amount = getItemQty(id);

  return getItemQty(id) > 0 ? (
    <div className="amount-buttons-wrapper amount-btns">
      <button
        data-testid="counter-button"
        type="button"
        className="amount-btn"
        onClick={() => updateItemQty(id, -1)}
      >
        {amount > 1 ? <FaMinus /> : <FaTrash />}
      </button>
      <h2 className="amount">{amount}</h2>
      <button
        type="button"
        className="amount-btn"
        onClick={() => updateItemQty(id, 1)}
      >
        <FaPlus />
      </button>
    </div>
  ) : (
    <button
      data-testid="initial-button"
      onClick={handleClick}
      className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
    >
      Add to cart
    </button>
  );
};

export default Button;
