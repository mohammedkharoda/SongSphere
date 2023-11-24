import { create } from "zustand";

interface PlayerStore {
    ids: string[];
    activeId?: string;
    setId: (id: string) => void;
    reset: () => void;
    setIds: (ids: string[]) => void;
}

const usePlayer = create<PlayerStore>((set: any) => ({
    ids: [],
    activedId: undefined,
    setId: (id: string) => set(() => ({ activeId: id })),
    setIds: (ids: string[]) => set(() => ({ ids })),
    reset: () => set({ ids: [], activeId: undefined })
}));

export default usePlayer;