import { create } from 'zustand'

export const useStoreSlider = create((set) => ({
  speed: 0.1,
  setSpeed: (speed) => set({ speed }),
  getArraySpeed: (speed) => {
    return [speed, speed]
  }
}))
