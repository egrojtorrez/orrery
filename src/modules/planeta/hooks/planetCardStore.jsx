import { create } from 'zustand'

export const useStoreCard = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onOpenChange: (isOpen) => set({ isOpen: !isOpen }),
  onClose: () => set({ isOpen: false }),
}))


export const useStoreDataCard = create((set) => ({
  data: {
    title: "Planet Card",
    description: "This is a card for a planet"
  },
  setData: (data) => set({ data }),
}))