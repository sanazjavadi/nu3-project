import { FaTrash } from "react-icons/fa";
import { formatPrice } from "../../../utils/formatPrice";
import useCard from "../../../hooks/useCard";

//components
import Button from "../../Button";

//interfaces
import { cardItem } from "../../../reducers/interfaces";

const CartItem = ({ id, image, title, price, link }: cardItem) => {
  const { getItemQty, removeItem } = useCard();
  const itemPrice = Number(price);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
        <img src={image} alt={title} width={50} height={50} />
      </td>
      <td className="px-6 py-4">
        <h5>{title}</h5>
      </td>
      <td className="px-6 py-4">
        <h5>{formatPrice(itemPrice)}</h5>
      </td>
      <td>
        <Button id={id} handleClick={() => removeItem(id)} />
      </td>
      <td className="px-6 py-4">
        <h5>{formatPrice(itemPrice * getItemQty(id))}</h5>
      </td>

      <td className="px-6 py-4 text-right">
        <button type="button" onClick={() => removeItem(id)}>
          <FaTrash title="delete item" />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
