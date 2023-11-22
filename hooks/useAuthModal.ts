import { create } from 'zustand';

interface AuthModalStore {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const useAuthModal = create<AuthModalStore>((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false })
}))

export default useAuthModal;