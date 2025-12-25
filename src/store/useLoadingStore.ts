import { create } from 'zustand'

type Store = {
  isFinishing: boolean
  onEndLoading: () => void
}

export const useLoadingStore = create<Store>()((set) => ({
  isFinishing: false,
  onEndLoading: () => set(() => ({ isFinishing: true })),
}))
