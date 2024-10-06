import { create } from 'zustand'

export const useStoreCard = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onOpenChange: (isOpen) => set({ isOpen: !isOpen }),
  onClose: () => set({ isOpen: false }),
}))