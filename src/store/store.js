import { create } from "zustand";

const useStore = create((set) => ({
  view: 1,
  modal: false,
  aside: false,
  toggleView: (v) => set({ view: v }),
  toggleModal: (bool) => set({ modal: bool }),
  toggleAside: (bool) => set({ aside: bool }),
  fn: () => set((state) => ({ d: state.d })),
}));

export default useStore;
