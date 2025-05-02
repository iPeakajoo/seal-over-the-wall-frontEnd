
import { create } from "zustand";
import  { products }  from "../datas/products";

const useDataStore = create(() => ({
  items: products, 
  // setItems: (newItems) => set({ items: newItems }),
  // addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  // removeItem: (id) =>
  //   set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}));

export default useDataStore;
