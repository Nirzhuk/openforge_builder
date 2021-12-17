import create from 'zustand'
import type { GetState, SetState, StateSelector } from 'zustand'



const useStore = create((set:any) => ({ 
    ready: false,
    target: null,
    setTarget: (target:any) => set({ target }),
    setReady: (target: boolean) => set({ target }),
    set,
    session: null,
}));


export {useStore}