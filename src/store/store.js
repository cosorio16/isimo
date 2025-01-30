import { create } from "zustand";

const useStore = create((set) => ({
  nameDevice: "",
  quantityAmount: localStorage.getItem("energyPrice") || 0,
  isAirDevice: false,
  popup: false,
  scheduler: 0,
  view: 0,
  modal: false,
  aside: false,
  handleName: (n) => set({ nameDevice: n }),
  toggleView: (v) => set({ view: v }),
  toggleIsAir: (bool) => set({ isAirDevice: bool }),
  toggleModal: (bool) => set({ modal: bool }),
  toggleAside: (bool) => set({ aside: bool }),
  togglePopup: (bool) => set({ popup: bool }),
  setScheduler: (id) => set({ scheduler: id }),
  setAmount: (amount) => set({ quantityAmount: amount }),
}));

export default useStore;

// fn: () => set((state) => ({ d: state.d })),
