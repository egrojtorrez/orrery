import { create } from 'zustand';

const useStore = create((set) => ({
  isRealisticSize: false,
  toggleSize: () => set((state) => ({ isRealisticSize: !state.isRealisticSize })),
}));

export default useStore;