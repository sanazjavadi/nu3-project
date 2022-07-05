import { addProduct, resetCart, basketItemsStates } from "../reducers/basket";
import { useAppDispatch, useAppSelector } from "./redux-hooks";

//interfaces
import { cardItem } from "../reducers/interfaces";

const useCard = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(basketItemsStates);
  const items = state.basketItems;

  const updateItems = (data: cardItem[]) => {
    dispatch(addProduct(data));
  };

  const addItem = (item: cardItem) => {
    if (items.some((i) => i.id === item.id)) {
      const newItems = items.map((i) => {
        if (i.id === item.id) {
          return {
            ...item,
            qty: i.qty + item.qty,
          };
        } else {
          return i;
        }
      });
      updateItems(newItems);
    } else {
      updateItems([...items, item]);
    }
  };

  const updateItemQty = (id: string, qty = 1) => {
    const cartItem = items.find((i) => i.id === id);
    if (cartItem) {
      if (cartItem.qty + qty > 0) {
        const newItems = items.map((i) => {
          if (i.id === id) {
            return { ...i, qty: i.qty + qty };
          } else {
            return i;
          }
        });
        updateItems(newItems);
      } else {
        // remove item
        removeItem(id);
      }
    }
  };

  const removeItem = (id: string) => {
    const newItems = items.filter((i) => i.id !== id);
    updateItems(newItems);
  };

  const clearCart = () => {
    dispatch(resetCart());
    // return storage.removeItem('cart');
  };

  const getItemQty = (id: string) => items.find((i) => i.id === id)?.qty || 0;

  const lineItemsCount = items.length;

  const totalItemsCount = items.reduce((a, c) => a + c.qty, 0);

  const totalItemsAmount = items.reduce(
    (a, c) => a + Number(c.price) * c.qty,
    0
  );

  return {
    state,
    items,
    addItem,
    clearCart,
    removeItem,
    getItemQty,
    updateItemQty,
    updateItems,
    lineItemsCount,
    totalItemsAmount,
    totalItemsCount,
  };
};

export type TUseCart = ReturnType<typeof useCard>;

export default useCard;
