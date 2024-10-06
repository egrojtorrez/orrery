import { create } from "zustand";

export const useStoreSun = create((set) => ({
  sunRef: null,
  setSunRef: (sunRef) => set({ sunRef }),
}))